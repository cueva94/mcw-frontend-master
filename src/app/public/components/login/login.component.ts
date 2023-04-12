import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  AuthService} from 'src/app/share/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginCheck: boolean;
  loadingCheck: boolean
  registerForm: FormGroup;
  login: FormGroup;
  submitted = false;
  loading =true
  

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    
    this.loginCheck = true;
    this.loadingCheck = false;

    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]],
    });

    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      phone: ['',[ Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      dob: ['', Validators.required,],
      deposit: ['', Validators.required],
    });

  }
  get f() { return this.registerForm.controls; }


  onLogin() {
      this.loadingCheck = true
      this.authService.login(this.login.value).subscribe((resUser) => {
      if (!!resUser) {
      sessionStorage.setItem('user', JSON.stringify(resUser))
      console.log(JSON.stringify(resUser))
      /* if(this.loginCheck)
      setTimeout(() => {
        this.router.navigate(['dashboard'])
        this.loadingCheck = false
      }, 1500) */
         console.log('usuario loggeado');
      }else 
      console.log('Usuario no encontrado');
    })
  }

  onRegister() {
    this.submitted = true; 
    if (this.registerForm.invalid) {
        return;
    }else
    this.authService
      .register(this.registerForm.value)
      .subscribe((resLogin) => {
        if (!!resLogin) {
          console.log('registrado');
          this.loginCheck = !this.loginCheck;
          this.registerForm.reset();
        } else {
          console.error('Usuario no registrado');
        }
      })
  }

  checkLogin() {
    this.loginCheck = !this.loginCheck;
    this.registerForm.reset();
  }
 
}