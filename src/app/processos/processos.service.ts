import { Injectable, OnInit } from '@angular/core';
import { Processo } from '../models/processo.model';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProcessosService implements OnInit {

  processosObservable: Observable<Processo[]>

  constructor(private db : AngularFireDatabase) {
    
  }

  ngOnInit() {
  }

  getProcessos(){
    return this.db.list('/processos').valueChanges();
  }

  insertProcesso(processo: Processo) {
    console.log('insertProcesso')
    console.log(processo)
    this.db.list('processos').push(processo);
  }

  updateProcesso(processo: Processo) {
    // this.processoList.update(processo.$key, processo)
  }

  deleteProcesso($key : string) {
    // this.processoList.remove($key);
  }

}
