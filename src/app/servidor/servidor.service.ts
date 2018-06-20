import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


import { Servidor } from './servidor.model';

@Injectable()
export class ServidorService {

  servidorList: AngularFireList<Servidor>;
  selectServidor: Servidor;

  constructor(private firebase : AngularFireDatabase) { }

  getServidores() {
    this.servidorList = this.firebase.list('servidores');
    console.log(this.servidorList);
    return this.servidorList;
  }

  insertServidor(servidor: Servidor) {
    console.log('insertServidor Service')
    console.log(servidor)
    this.firebase.list('servidores').push(servidor);
  }

  updateServidor(servidor: Servidor) {
    this.servidorList.update(servidor.$key, servidor)
  }

  deleteServidor($key : string) {
    this.servidorList.remove($key);
  }

}
