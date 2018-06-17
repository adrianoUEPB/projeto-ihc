import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  formulario: FormGroup
  
  @Input('novoForm') new?: string = 'true'
  editar: boolean = false

  constructor(private fb: FormBuilder) { }

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
      name: ['novo', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      foneFixo: [''],
      celular: ['', Validators.required],
    });
  }

  createUpdateForm() {
    this.editar = true
    this.formulario = this.fb.group({
      name: ['Update form', Validators.required],
      cpf: ['Update form', Validators.required],
      email: ['Update form', Validators.required],
      foneFixo: ['Update form'],
      celular: ['Update form', Validators.required],
    });
  }



}
