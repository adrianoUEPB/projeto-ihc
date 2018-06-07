import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-processos',
  templateUrl: './listar-processos.component.html',
  styleUrls: ['./listar-processos.component.css']
})
export class ListarProcessosComponent implements OnInit {

  formFilter: FormGroup
  filtrar: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  
  showFilter() {
    (this.filtrar?this.filtrar = false: this.filtrar = true);
  }

}
