import { ProcessosService } from './../../processos/processos.service';
import { LoginService } from './../../security/login/login.service';
import { Servidor } from './../../models/servidor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  usuarioLogado: Servidor

  constructor(private loginService: LoginService,
              private processoService: ProcessosService
  ) { }

  ngOnInit() {
  }

  servidor() {
    this.usuarioLogado =  this.loginService.usuario
    console.log("this.usuarioLogado")
    console.log(this.usuarioLogado)
    return this.usuarioLogado[0]
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn()
  }

  login() {
    this.loginService.handleLogin()
  }

  logout() {
    return this.loginService.logout()
  }
}
