import { ServidorService } from './../../servidor/servidor.service';
import { ProcessosService } from './../../processos/processos.service';
import { Servidor } from './../../models/servidor.model';
import { Router } from '@angular/router';
import { NotificationService } from './../../shared/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  usuario: any

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private processoService: ProcessosService,
              private servidorService: ServidorService,
              private notificationService: NotificationService,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      login: this.fb.control(''),
      senha: this.fb.control('')
    })
  }

  login() {
    this.loginService.login(this.loginForm.value.login, this.loginForm.value.senha)
                      .subscribe(usuario => {
                        if(usuario.length === 0) {
                          this.notificationService.notify(`O usuário ${this.loginForm.value.login} não foi encontrado.`)
                        } else {
                          this.notificationService.notify(`Bem vindo, ${this.loginForm.value.login}.`)
                          this.processoService.verificaAcesso(usuario)
                          this.servidorService.verificaAcesso(usuario)
                          this.router.navigate(['/processos'])
                        }
                      })
  }
}
