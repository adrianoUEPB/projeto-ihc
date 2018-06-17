import { ProcessoService } from './../processo.service';
import { Processo } from './../../../models/processo.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-processos',
  templateUrl: './listar-processos.component.html',
  styleUrls: ['./listar-processos.component.css']
})
export class ListarProcessosComponent implements OnInit {

  formFilter: FormGroup
  filtrar: boolean = false;

  processos;
  constructor(private fb: FormBuilder,
              private processoService: ProcessoService,
              private router: Router
  ) { }

  ngOnInit() {
    this.getProcessos()
  }
  
  showFilter() {
    (this.filtrar?this.filtrar = false: this.filtrar = true);
  }

  getProcessos() {
    this.processos = this.processoService.getProcessos()
  }

  showItem(processo) {
    console.log(processo)
    // this.router.navigate(['/processos/editar']);
  }

}
