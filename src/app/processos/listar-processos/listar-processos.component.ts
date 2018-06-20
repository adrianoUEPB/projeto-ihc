import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ProcessosService } from './../processos.service';
import { Processo } from './../../../models/processo.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-listar-processos',
  templateUrl: './listar-processos.component.html',
  styleUrls: ['./listar-processos.component.css']
})
export class ListarProcessosComponent implements OnInit {

  formFilter: FormGroup
  filtrar: boolean = false;

  processos: AngularFireList<any>

  constructor(private fb: FormBuilder,
              private router: Router,
              private processosService: ProcessosService
  ) { }

  ngOnInit() {
  }
  
  showFilter() {
    (this.filtrar?this.filtrar = false: this.filtrar = true);
  }

  getProcessos() {
    console.log('Chamou o getProcessos do Listar component')
    console.log(this.processosService.getProcessos())
    // console.log(this.processos)

  }

  showItem(processo) {
    console.log(processo)
    // this.router.navigate(['/processos/editar']);
  }

}
