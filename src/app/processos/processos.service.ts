import { Processo } from './processo.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProcessosService implements OnInit {

  processosObservable: any[]
  processoList: AngularFireList<Processo>;
  selectProcesso: Processo;

  constructor(private firebase : AngularFireDatabase) { }

  ngOnInit() {
    // this.processosObservable = this.getProcessos()
    // console.log(this.processosObservable);
  }

  getProcessos() {
    // this.processosObservable = this.firebase.list('Processoes');
    console.log(this.firebase.list('/processos').valueChanges());
    
  }

  insertProcesso(processo: Processo) {
    this.processoList.push(processo);
  }

  updateProcesso(processo: Processo) {
    this.processoList.update(processo.$key, processo)
  }

  deleteProcesso($key : string) {
    this.processoList.remove($key);
  }

}
