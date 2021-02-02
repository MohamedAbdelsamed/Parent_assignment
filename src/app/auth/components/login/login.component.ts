import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email : this.fb.control('eve.holt@reqres.in', [Validators.required]),
    password : this.fb.control('cityslicka', [Validators.required]),
  })
  isLoggin: boolean;

  get email() {
    return this.loginForm.get('email')
  };

  get password(){
    return this.loginForm.get('password')
  };

  constructor(private fb : FormBuilder,
              private authService: AuthService,
              private toastr: ToastrService,
              private route: Router) { }

  ngOnInit(): void {
  }

  login(){
    let crediential = {
      email: this.email.value,
      password: this.password.value
    }

      this.authService.login(crediential).subscribe((res:any)=>{
        if(res.token){
          this.isLoggin = true;
          this.toastr.success('login Success')
          localStorage.setItem('token', JSON.stringify(res.token));
          this.route.navigate(["user-list"])
        }
    });
  }

}
