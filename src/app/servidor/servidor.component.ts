import { Component, OnInit } from '@angular/core';
import { ServidorService } from './servidor.service';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css'],
  providers: [ServidorService]
})
export class ServidorComponent implements OnInit {

  constructor(private servidorService: ServidorService) { }

  ngOnInit() {
  }

}
