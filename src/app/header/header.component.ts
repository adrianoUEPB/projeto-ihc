import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logado: boolean = false

  urlImg: string = '../../assets/img/logo-cg.png'

  constructor() { }

  ngOnInit() {
  }

}
