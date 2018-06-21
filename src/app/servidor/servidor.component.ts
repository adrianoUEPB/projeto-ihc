import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ServidorService } from './servidor.service';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css'],
  providers: [ServidorService]
})
export class ServidorComponent implements OnInit {

  servidoresObservable: Observable<any[]>

  constructor(private servidorService: ServidorService,
              private db:AngularFireDatabase) { }

  ngOnInit() {
  }

}
