import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ProcessosService } from '../processos.service';
import { ValidationPath } from '@firebase/database/dist/src/core/util/Path';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  formulario: FormGroup

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/
  cepPattern = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/
  cpfPattern = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/ || /^[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/

  @Input('novoForm') new?: boolean = true
  editar: boolean = false

  constructor(private fb: FormBuilder,
              private processosService: ProcessosService
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
      name:  this.fb.control('', [Validators.required, Validators.minLength(5)]),
      cpf: this.fb.control('', [Validators.required, Validators.pattern(this.cpfPattern)]),
      email: this.fb.control('', [Validators.required]),
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
        obs: this.fb.control('')
      })
    })
   
  }

  createUpdateForm() {
    this.editar = true
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

  saveForm() {
    // console.log(this.formulario.value)
    this.processosService.insertProcesso(this.formulario.value)
  }

  getProcessos() {
    console.log('Chamou o getProcessos do template component')
    
    this.processosService.getProcessos()

  }



}
