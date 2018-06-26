import { ProcessosService } from './processos.service';
import { LoginService } from './../security/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements OnInit {

  perfilUsuario: string
  escrita: boolean = false
  leitura: boolean = false

  constructor(private processoService: ProcessosService) { }

  ngOnInit() {
    this.escrita = this.processoService.escrita
    this.leitura = this.processoService.leitura
  }

  isLoggedIn(): boolean {
    return this.processoService.isLoggedIn()
  }

}
