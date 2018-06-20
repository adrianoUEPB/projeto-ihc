import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ProcessosService } from '../processos.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  formulario: FormGroup
  
  @Input('novoForm') new?: string = 'true'
  editar: boolean = false

  constructor(private fb: FormBuilder,
              private processosService: ProcessosService
  ) { }

  ngOnInit() {
    console.log(this.new)
    if(this.new === 'true') {
      this.createNewForm()
    } else {
      this.createUpdateForm()
    }
  }

  createNewForm() {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      foneFixo: [''],
      celular: ['', Validators.required],
      endereco: this.fb.group({
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        cep: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        pais: ['', Validators.required]
      }),
      processo: this.fb.group({
        assunto: ['', Validators.required],
        problema: ['', Validators.required],
        situacao: ['Em Análise', Validators.required],
        obs: ['']
      })
    });
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

  saveForm() {
    console.log(this.formulario.value)
    this.processosService.insertProcesso(this.formulario.value)
  }

  getProcessos() {
    console.log('Chamou o getProcessos do template component')
    
    console.log(this.processosService.getProcessos())

  }

}
