import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  get email() {
    return this.loginForm.get('email')
  };

  get password(){
    return this.loginForm.get('password')
  };

  constructor(private fb : FormBuilder, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(){
    let crediential = {
      email: this.email.value,
      password: this.password.value
    }

      this.authService.login(crediential).subscribe((res:any)=>{
        if(res.token){
          this.toastr.success('login Success')
          localStorage.setItem('token', JSON.stringify(res.token))
        }
    });
  }

}
