import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-content',
  templateUrl: './input-content.component.html',
  styleUrls: ['./input-content.component.css']
})
export class InputContentComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string
  @Input() showTip: boolean = true
  
  input: any

  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.control
    if(this.input === undefined) {
      throw new Error('Este componente precisa ser usado com uma diretiva formControlName')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
