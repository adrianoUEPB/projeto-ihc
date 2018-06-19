import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


import { ServidorService } from './../servidor.service';


@Component({
  selector: 'app-template-servidor-form',
  templateUrl: './template-servidor-form.component.html',
  styleUrls: ['./template-servidor-form.component.css']
})
export class TemplateServidorFormComponent implements OnInit {

  servidorForm: FormBuilder

  constructor(private servidorService: ServidorService) { }

  ngOnInit() {
  }

  

}
