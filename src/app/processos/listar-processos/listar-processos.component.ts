import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-processos',
  templateUrl: './listar-processos.component.html',
  styleUrls: ['./listar-processos.component.css']
})
export class ListarProcessosComponent implements OnInit {

  filtrar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
