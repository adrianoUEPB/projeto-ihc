import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-servidor-cadastro',
  templateUrl: './servidor-cadastro.component.html',
  styleUrls: ['./servidor-cadastro.component.css']
})
export class ServidorCadastroComponent implements OnInit {

  servidorForm: FormGroup

  constructor() { }

  ngOnInit() {
  }

}
