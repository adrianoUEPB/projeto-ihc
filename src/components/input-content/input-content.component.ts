import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-content',
  templateUrl: './input-content.component.html',
  styleUrls: ['./input-content.component.css']
})
export class InputContentComponent implements OnInit {

  @Input() label: string
  @Input() errorMessage: string
  @Input() showTip: boolean = true
  
  input: any

  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

}
