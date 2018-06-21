import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ServidorService } from './servidor.service';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent implements OnInit {

  adminstrador: boolean = false;
  servidoresObservable: Observable<any[]>

  constructor(private servidorService: ServidorService) { }

  ngOnInit() {
    this.adminstrador = this.servidorService.administrador
  }

}
