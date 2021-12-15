
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { CommentsService } from 'src/app/comments.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataForm: FormGroup
  email: string;
  auth: boolean = false;

  constructor(private route:Router,private fb:FormBuilder,private commentservice:CommentsService) {}

   
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
    let emailVal  = this.primEmail;  //primemail wala method primaryEmail field se data laya hai.
    console.log("login method is working properly")
    console.log("first"+emailVal.value);

    let str:string = emailVal.value;
    localStorage.setItem("username",str);
     
      this.auth = true;  
      if(this.auth){
    this.route.navigateByUrl('/todoscomponent');
     }
     else
     {
       document.getElementById("Error").innerHTML = "Something Error";
     }

  }

  get primEmail(){
    return this.dataForm.get('primaryEmail')
    }
    
}
