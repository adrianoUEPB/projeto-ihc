import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ProcessosService } from './../processos.service';
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

  processos: any[]

  constructor(private fb: FormBuilder,
              private router: Router,
              private processosService: ProcessosService
  ) { }

  ngOnInit() {
    this.getProcessos()
  }
  
  showFilter() {
    (this.filtrar?this.filtrar = false: this.filtrar = true);
  }


  getProcessos() {
    console.log('Chamou o getProcessos do template component')
    var teste = this.processosService.getProcessos()
      .subscribe(
        processos => {
          this.processos = processos
        }
      )
  }

  showItem(processo) {
    console.log(processo)
    // this.router.navigate(['/processos/editar']);
  }

}
