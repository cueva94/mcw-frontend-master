import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit{
  loginCheck: boolean
  registerFrom: FormGroup
  login: FormGroup
  error: string
  fromRegister = ''
  constructor(private router : Router, private formBuilder: FormBuilder){}

  ngOnInit(): void {
  this.loginCheck = true

  this.login = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
    
   

  this.registerFrom = this.formBuilder.group({
    username: ['', Validators.required],
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    birthdate: ['', Validators.required],
    deposit: ['', Validators.required],
  })
    
  }

  userLogin(){
  }


  onRegister(){ 
   }
 

  checkLogin(){
    this.loginCheck = !this.loginCheck
  }

}
