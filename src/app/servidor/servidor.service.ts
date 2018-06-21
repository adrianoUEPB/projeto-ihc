import { Observable } from 'rxjs/Observable';
import { APP_API } from './../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Servidor } from './../models/servidor.model';


@Injectable()
export class ServidorService {


  constructor(private http: HttpClient) { 
  }

  getServidores(): Observable<Servidor[]> {
    return this.http.get<Servidor[]>(`${APP_API}/servidores`)
  }

  insertServidor(servidor: Servidor): Observable<Servidor> {
    return this.http.post<Servidor>(`${APP_API}/servidores`, servidor);
  }

  updateServidor(servidor: Servidor) {
  }

  deleteServidor($key : string) {
  }

}
