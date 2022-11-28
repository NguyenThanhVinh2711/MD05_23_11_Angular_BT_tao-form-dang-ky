import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() {
  }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    account: new FormControl("",[Validators.required,Validators.minLength(3)]),
    password: new FormControl("",[Validators.required,Validators.minLength(3)]),
    email: new FormControl("",[Validators.required,Validators.minLength(3),Validators.email]),
    gender: new FormControl("",[Validators.required]),
    name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]+$")]),
    age: new FormControl("",[Validators.required]),
    address: new FormControl("",[Validators.required,Validators.minLength(3)]),
  })

  get account(){
    return this.registerForm.get('account')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get name(){
    return this.registerForm.get('name')
  }
  get age(){
    return this.registerForm.get('age')
  }
  get address(){
    return this.registerForm.get('address')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get gender(){
    return this.registerForm.get('gender')
  }


  onSubmit() {
    console.log(this.registerForm.value);
    alert("Đăng ký thành công")
  }


}
