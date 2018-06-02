import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
>>>>>>> ac04a9311e9394dd40bb3b983528aefe2b07f01f

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  loginForm: FormGroup;
=======
  loginForm: FormGroup
>>>>>>> ac04a9311e9394dd40bb3b983528aefe2b07f01f

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
<<<<<<< HEAD
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
=======
    this.loginForm = this.fb.group({
      user: this.fb.control('', [Validators.required]),
      senha: this.fb.control('', [Validators.required])
    })
>>>>>>> ac04a9311e9394dd40bb3b983528aefe2b07f01f
  }

}
