import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import * as jQuery from 'jquery';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
userProfileForm:FormGroup
changedPasswordForm:FormGroup
id:number
  firstName:string
    lastName:string
    email:string
    gsm:string
    name = 'Angular 6';
    InputValue: any;


  constructor(private userService:UserService,
              private formBuilder:FormBuilder,
              private authService:AuthService,private router:Router,private toastrService:ToastrService) { }

  ngOnInit() {
this.createForm()
this.getAllUserInfo();


  function isNumberKey(evt, element) {
   
  }
  }
  createForm(){
    this.userProfileForm=this.formBuilder.group({
      id:[Number(localStorage.getItem('userId')),Validators.required],
      email:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      gsm:["",Validators.required],   
      modifiedBy:[Number(localStorage.getItem('userId')),Validators.required],
    })

    this.changedPasswordForm=this.formBuilder.group({
      email:[localStorage.getItem('email'),Validators.required],
      newPassword:["",Validators.required],
      oldPassword:["",Validators.required],
      modifiedBy:[Number(localStorage.getItem('userId')),Validators.required],
    })

  }

  getAllUserInfo(){
    let userId=Number(localStorage.getItem('userId'));
 this.userService.getByUserId(userId).subscribe(response=>{  
    this.firstName=response.firstName
  this.lastName=response.lastName
  this.email=response.email
  this.gsm=response.gsm
 })  
  }
 
  changedPassword(){
    if (this.changedPasswordForm.valid)
    {
      let changedPasswordModel=Object.assign({},this.changedPasswordForm.value)
      this.authService.changedPassword(changedPasswordModel).subscribe(response=>{
       this.toastrService.success(response.message)
        localStorage.clear();
         this.router.navigate(["/home"])
      },responseError=>{
        for (let index = 0; index < responseError.error.Errors.length; index++) {
        
          this.toastrService.error(responseError.error.Errors[index].ErrorMessage)           
        }
        
        
      })

    }
    else{
    this.toastrService.error("Bilgileri Eksiksiz Giriniz")
    }
  }
  userUpdate(){
    if (this.userProfileForm.valid)
    { 
      let userModel=Object.assign({},this.userProfileForm.value)
      this.userService.userUpdate(userModel).subscribe(response=>{
       this.toastrService.success("Bilgileriniz Güncellendi")
      })
    }
    else{
      this.toastrService.error("Bilgierli Eksiksiz Giriniz")
    }
  }
  
}
