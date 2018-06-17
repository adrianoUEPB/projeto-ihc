import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Processo } from '../../models/processo.model';


@Injectable()
export class ProcessoService {

  processos = [
    {
      "protocolo" : 1234,
      "contribuinte" : "contribuinte 1",
      "cpf_cnpj" : "111.111.111-11",
      "assunto" : "IPTU",
      "situacao" : "Em Andamento",
      "entrada" : "14/02/2008"
    },
    {
      "protocolo" : 1111,
      "contribuinte" : "contribuinte 2",
      "cpf_cnpj" : "111.111.111-11",
      "assunto" : "ITBI",
      "situacao" : "Deferido",
      "entrada" : "17/10/2015"
    },
    {
      "protocolo" : 12323,
      "contribuinte" : "contribuinte 3",
      "cpf_cnpj" : "111.111.111-11",
      "assunto" : "IPTU",
      "situacao" : "Pendente",
      "entrada" : "14/02/2018"
    }
  ]

  constructor() { }

  getProcessos() {
    return this.processos
  }

}
