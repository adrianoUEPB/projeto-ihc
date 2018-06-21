import { tap } from 'rxjs/operators';
import { Servidor } from './../../models/servidor.model';
import { APP_API } from './../../app.api';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";



@Injectable()
export class LoginService {
  
  constructor(private http: HttpClient) { }

  login(login: string, senha: string){
    return this.http.get<any>(`${APP_API}/servidores?login=${login}&senha=${senha}`)
  }
}