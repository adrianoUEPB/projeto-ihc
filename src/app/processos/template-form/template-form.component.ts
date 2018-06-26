import { NotificationService } from './../../shared/notification.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ProcessosService } from '../processos.service';
import { Processo } from '../../models/processo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  formulario: FormGroup
  processos: any[]
  processo: Processo

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/
  cepPattern = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/
  cpfPattern = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/ || /^[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/

  @Input('novoForm') new?: boolean = true

  constructor(private fb: FormBuilder,
              private processosService: ProcessosService,
              private notificationService: NotificationService,
              private route : ActivatedRoute
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
    this.processosService.processoById(this.route.snapshot.params['id'])
      .subscribe(processo => {
        var processoEdit = processo
        console.log('processo service')
        console.log(processoEdit)
        this.formulario = new FormGroup({
          name: this.fb.control(processoEdit.name ,[Validators.required]),
          cpf: this.fb.control(processoEdit.cpf, [Validators.required]),
          email: this.fb.control(processoEdit.email, [Validators.required]),
          foneFixo: this.fb.control(processoEdit.foneFixo),
          celular: this.fb.control(processoEdit.celular, [Validators.required]),
          endereco: this.fb.group({
            rua: this.fb.control(processoEdit.endereco.rua, [Validators.required]),
            numero: this.fb.control(processoEdit.endereco.numero, [Validators.required]),
            complemento: this.fb.control(processoEdit.endereco.complemento),
            cep: this.fb.control(processoEdit.endereco.cep, [Validators.required]),
            bairro: this.fb.control(processoEdit.endereco.bairro, [Validators.required]),
            cidade: this.fb.control(processoEdit.endereco.cidade, [Validators.required]),
            pais: this.fb.control(processoEdit.endereco.pais, [Validators.required])
          }),
          processo: this.fb.group({
            assunto: this.fb.control(processoEdit.processo .assunto, [Validators.required]),
            problema: this.fb.control(processoEdit.processo.problema,[Validators.required]),
            situacao: this.fb.control(processoEdit.processo.situacao,[Validators.required]),
            protocolo: this.fb.control(processoEdit.processo.protocolo,[Validators.required]),
            dataEntrada: this.fb.control(processoEdit.processo.dataEntrada,[Validators.required]),
            dataModificacao: this.fb.control(processoEdit.processo.dataModificacao,[Validators.required]),
            obs: this.fb.control(processoEdit.processo.obs)
          })
        })
      })
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

  updateProcesso() {
    this.processosService.updateProcesso(this.formulario.value)
  }

  getProcessos() {
    var teste = this.processosService.getProcessos()
      .subscribe(
        processo => {
          this.processos = processo
        }
      )
  }



}
