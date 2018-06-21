import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-novo',
  templateUrl: './form-novo.component.html',
  styleUrls: ['./form-novo.component.css']
})
export class FormNovoComponent implements OnInit {

  novoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


}
