import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router:Router) {
this.loginForm=formBuilder.group({    _username:'',
    _password:''})   
   }
  hide = true;
  loginForm;
  ngOnInit(): void {
  }
  onSubmit(loginData){
    console.log(loginData);
    this.router.navigate(['dashboard?developer'])
  }
}
