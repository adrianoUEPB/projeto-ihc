import { Servidor } from './../../models/servidor.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


import { ServidorService } from './../servidor.service';
import { NotificationService } from '../../shared/notification.service';


@Component({
  selector: 'app-template-servidor-form',
  templateUrl: './template-servidor-form.component.html',
  styleUrls: ['./template-servidor-form.component.css']
})
export class TemplateServidorFormComponent implements OnInit {

  servidores: any[]
  servidorForm: FormGroup
  cpfPattern = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/ || /^[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/

  constructor(private servidorService: ServidorService,
              private fb: FormBuilder,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.createNewForm()
  }

  createNewForm() {
    this.servidorForm = new FormGroup({
      name:  this.fb.control('', [Validators.required]),
      cpf: this.fb.control('', [Validators.required]),
      matricula: this.fb.control('', [Validators.required]),
      login: this.fb.control('', [Validators.required]),
      senha: this.fb.control('', [Validators.required]),
      perfil: this.fb.control('Administrador', [Validators.required]),
      cargo: this.fb.control('Diretor', [Validators.required])
    })
   
  }

  insertServidor() {
    this.servidorService.insertServidor(this.servidorForm.value)
      .subscribe(servidor => this.servidores.push(servidor))
    this.notificationService.notify(`Servidor adicionado com sucesso`)
  }

  

}
