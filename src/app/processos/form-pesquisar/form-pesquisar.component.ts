import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProcessosService } from '../processos.service';

@Component({
  selector: 'app-form-pesquisar',
  templateUrl: './form-pesquisar.component.html',
  styleUrls: ['./form-pesquisar.component.css']
})
export class FormPesquisarComponent implements OnInit {

  searchForm: FormGroup
  processos: any[]
  constructor(private fb: FormBuilder,
              private processoService: ProcessosService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      termo: this.fb.control(''),
      select: this.fb.control('Protocolo')
    })
  }

  search() {
    var busca: string
    
    if(this.searchForm.value.select === "Protocolo") {
      busca = ".protocolo"
    } else if(this.searchForm.value.select === "Protocolo") {
      busca = ""
    } else if(this.searchForm.value.select === "Assunto") {
      busca = ".assunto"
    }
    this.processoService.searchProcessos(this.searchForm.value.termo, busca)
      .subscribe(processos => {
        this.processos = processos
      })
  }

}
