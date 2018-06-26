import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Servidor } from './../../models/servidor.model';
import { APP_API } from './../../app.api';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";



@Injectable()
export class LoginService {


  
  usuario : Servidor
  lastUrl: string

  constructor(private http: HttpClient,
              private router: Router
  ) { }

  login(login: string, senha: string){
    return this.http.get<any>(`${APP_API}/servidores?login=${login}&senha=${senha}`)
                    .pipe(
                      tap(
                        user => this.usuario = user
                      )
                    )
  }

  isLoggedIn(): boolean {
    console.log('isLoggedIn login service')
    console.log(this.usuario)
    return this.usuario !== undefined
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login'])
  }

  logout() {
    this.usuario = undefined
  }
}