import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm;
  hide=true;
  constructor(private formBuilder:FormBuilder) { 
    this.signupForm=formBuilder.group({
      _name:'',
      _email:'',
      _username:'',
      _password:'',
      _confirmPassword:''
    })
  }

  ngOnInit(): void {
  }

  onSubmit(signupData){
    console.log(signupData);
  }
}
