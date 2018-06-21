import { Servidor } from './../models/servidor.model';
import { Processo } from './../models/processo.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { APP_API } from '../app.api';
import { map } from 'rxjs/operator/map';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../security/login/login.service';




@Injectable()
export class ProcessosService implements OnInit {

  perfilUsuario: string
  escrita: boolean = false
  leitura: boolean = false
  administrador: boolean = false
  processosObservable: Observable<any[]>

  constructor(private http: HttpClient) {
    
  }

  verificaAcesso(usuario: Servidor) {
    this.perfilUsuario = usuario[0].perfil

    if(this.perfilUsuario === "Administrador" || this.perfilUsuario === "Comum") {
      this.escrita = true
      this.leitura = true
    } else if (this.perfilUsuario === "Consulta") {
      this.escrita = false
      this.leitura = true
    } else {
      this.escrita = false
      this.leitura = false
    }
  }

  ngOnInit() {
    
  }

  getProcessos(): Observable<Processo[]>{
    return this.http.get<Processo[]>(`${APP_API}/processos`)
  }

  insertProcesso(processo: Processo): Observable<Processo> {
    console.log('processo recebido')
    console.log(processo)
    return this.http.post<Processo>(`${APP_API}/processos`, processo);
                                    
  }

  searchProcessos(termo: string, busca: string): Observable<Processo[]> {
    return this.http.get<Processo[]>(`${APP_API}/processos?processo${busca}=${termo}`)
  }

  updateProcesso(processo: Processo) {
    // this.processoList.update(processo.$key, processo)
  }

  deleteProcesso($key : string) {
    // this.processoList.remove($key);
  }

}
