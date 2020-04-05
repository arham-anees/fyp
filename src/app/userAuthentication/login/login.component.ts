import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
this.loginForm=formBuilder.group({    _username:'',
    _password:''})   
   }
  hide = true;
  loginForm;
  ngOnInit(): void {
  }
  onSubmit(loginData){
    console.log(loginData);
  }
}
