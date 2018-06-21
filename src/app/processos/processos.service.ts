import { Processo } from './../models/processo.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { APP_API } from '../app.api';
import { map } from 'rxjs/operator/map';
import { catchError } from 'rxjs/operators';




@Injectable()
export class ProcessosService implements OnInit {

  processosObservable: Observable<any[]>

  constructor(private http: HttpClient) {
    
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

  updateProcesso(processo: Processo) {
    // this.processoList.update(processo.$key, processo)
  }

  deleteProcesso($key : string) {
    // this.processoList.remove($key);
  }

}
