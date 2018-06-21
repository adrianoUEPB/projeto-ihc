import { Servidor } from './../../models/servidor.model';
import { ServidorService } from './../servidor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servidor-lista',
  templateUrl: './servidor-lista.component.html',
  styleUrls: ['./servidor-lista.component.css']
})
export class ServidorListaComponent implements OnInit {

  servidores: Servidor[]

  constructor(private servidorService: ServidorService) { }

  ngOnInit() {
    this.getServidores()
  }

  getServidores() {
    this.servidorService.getServidores()
      .subscribe(servidor => this.servidores = servidor)
  }

}
