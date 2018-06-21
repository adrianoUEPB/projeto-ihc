import { Observable } from 'rxjs/Observable';
import { APP_API } from './../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Servidor } from './../models/servidor.model';


@Injectable()
export class ServidorService {

  perfilUsuario: string
  administrador: boolean = false

  constructor(private http: HttpClient) { 
  }

  getServidores(): Observable<Servidor[]> {
    return this.http.get<Servidor[]>(`${APP_API}/servidores`)
  }
  verificaAcesso(usuario: Servidor) {
    this.perfilUsuario = usuario[0].perfil

    if(this.perfilUsuario === "Administrador") {
      this.administrador = true
    } else {
      this.administrador = false
    }
  }


  insertServidor(servidor: Servidor): Observable<Servidor> {
    return this.http.post<Servidor>(`${APP_API}/servidores`, servidor);
  }

  updateServidor(servidor: Servidor) {
  }

  deleteServidor($key : string) {
  }

}
