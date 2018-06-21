import { NotificationService } from './../../shared/notification.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ProcessosService } from '../processos.service';
import { Processo } from '../../models/processo.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  formulario: FormGroup
  processos: any[]

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/
  cepPattern = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/
  cpfPattern = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/ || /^[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/

  @Input('novoForm') new?: boolean = true

  constructor(private fb: FormBuilder,
              private processosService: ProcessosService,
              private notificationService: NotificationService
  ) { }

  ngOnInit() {
    if(this.new) {
      this.createNewForm()
    } else {
      this.createUpdateForm()
    }
  }

  createNewForm() {
    this.formulario = new FormGroup({
      name:  this.fb.control('', [Validators.required]),
      cpf: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      foneFixo: this.fb.control(''),
      celular: this.fb.control('', [Validators.required]),
      endereco: this.fb.group({
        rua: this.fb.control('', [Validators.required]),
        numero: this.fb.control('', [Validators.required]),
        complemento: this.fb.control(''),
        cep: this.fb.control('', [Validators.required]),
        bairro: this.fb.control('', [Validators.required]),
        cidade: this.fb.control('', [Validators.required]),
        pais: this.fb.control('', [Validators.required])
      }),
      processo: this.fb.group({
        assunto:  this.fb.control('IPTU', [Validators.required]),
        problema: this.fb.control('BAIXA DE DÉBITO', [Validators.required]),
        situacao: this.fb.control('Em Análise', [Validators.required]),
        protocolo: this.fb.control(this.gerarProtocolo()),
        dataEntrada: this.fb.control(this.dataAtual()),
        dataModificacao: this.fb.control(''),
        obs: this.fb.control('')
      })
    })
   
  }

  createUpdateForm() {
    this.formulario = this.fb.group({
      name: ['Update', Validators.required],
      cpf: ['Update', Validators.required],
      email: ['Update', Validators.required],
      foneFixo: ['Update'],
      celular: ['Update', Validators.required],
      endereco: this.fb.group({
        rua: ['Update', Validators.required],
        numero: ['Update', Validators.required],
        complemento: ['Update'],
        cep: ['Update', Validators.required],
        bairro: ['Update', Validators.required],
        cidade: ['Update', Validators.required],
        pais: ['Update', Validators.required]
      }),
      processo: this.fb.group({
        assunto: ['IPTU', Validators.required],
        problema: ['ANÁLISE DE DÉBITO', Validators.required],
        situacao: ['Em Análise', Validators.required],
        obs: ['Update']
      })
    });
  }

  mascaCpfCnpj(value) {
    if(value == this.numberPattern)
      console.log(value)
  }


  gerarProtocolo() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = ("0" + (data.getMonth() + 1)).slice(-2)
    var finalRandon = Math.floor((Math.random() * 100000) + 1)
    return `${ano}${mes}${finalRandon}`
  }

  dataAtual() {
    var data = new Date();
    var dia = ("0" + (data.getDate())).slice(-2)
    var mes = ("0" + (data.getMonth() + 1)).slice(-2)
    var ano = data.getFullYear();  
    return `${dia}/${mes}/${ano}`
  }
 
  insertProcesso() {
    var dados = this.formulario.value
    this.processosService.insertProcesso(dados).subscribe(
      processo => this.processos.push(processo)
    )
    this.notificationService.notify(`Processo adicionado com sucesso! Protocolo: ${dados.processo.protocolo}`)
  }

  getProcessos() {
    console.log('Chamou o getProcessos do template component')
    var teste = this.processosService.getProcessos()
      .subscribe(
        processo => {
          this.processos = processo
        }
      )
  }



}
