
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataForm: FormGroup
  email: string;

  constructor(private route:Router,private fb:FormBuilder) {}

   
flag:boolean = false;
  ngOnInit() {

    this.dataForm = this.fb.group({
      primaryEmail: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      });
  }
   


//  get f(){return this.dataForm.controls}

  login() {
    // console.log(this.dataForm.value)
    let emailVal  = this.primEmail;  //primemail ko email val me then print this.
    console.log("login method is working properly")
    console.log(emailVal.value);
    console.log(this.primEmail);

    localStorage.setItem("Email_Store","skv@gmail.com");
    // localStorage.setItem("Email_Store",emailVal.value);
     if(emailVal.value == "skv@gmail.com"){

    this.route.navigateByUrl('/todoscomponent');
     }
     else
     {
       document.getElementById("Error").innerHTML = "Fill Correct Login or Password";
     }

  }

  get primEmail(){
    return this.dataForm.get('primaryEmail')
    }
    

}
