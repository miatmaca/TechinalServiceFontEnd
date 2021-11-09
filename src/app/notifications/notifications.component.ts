import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperationClaim } from 'app/models/operationClaim';
import { User } from 'app/models/user';
import { AuthService } from 'app/services/auth.service';
import { OperationClaimService } from 'app/services/operation-claim.service';
import { UserOperationClaimService } from 'app/services/user-operation-claim.service';
import { UserService } from 'app/services/user.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  users:User[]
  userInfoForm:FormGroup
  userAthorizationAddingForm:FormGroup
  personAdd:boolean
  personelAthorizationControl:boolean
  operationClaims:OperationClaim[]
  filterText=""
  constructor(private userService:UserService,private formBuilder:FormBuilder,private authService:AuthService,private operationCliamService:OperationClaimService,
    private userOperationClaimService:UserOperationClaimService,private toastrService:ToastrService) { }
  
  ngOnInit() {
    this.getAllUser();
    this.createForm();
    this.getAllOperationClaim();
  }

  getAllUser(){
  this.userOperationClaimService.getAllDto().subscribe(response=>{
    this.users=response.data    
  },responseError=>{
    this.toastrService.error(responseError.error.message)
  })
  }
  createForm(){
   this.userInfoForm= this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      gsm:["",Validators.required],  
     // status:["",Validators.required],
      createdBy:[Number(localStorage.getItem('userId')),Validators.required],
      modifiedBy:[Number(localStorage.getItem('userId')),Validators.required]    
    })
    this.userAthorizationAddingForm= this.formBuilder.group({
      operationClaimId:["",Validators.required],
      userId:["",Validators.required],   
     // status:["",Validators.required],
      createdBy:[Number(localStorage.getItem('userId')),Validators.required],
      modifiedBy:[Number(localStorage.getItem('userId')),Validators.required]    
    })

  }
register(){
  if (this.userInfoForm.valid)
  { 
    this.userInfoForm.value.status=Number(this.userInfoForm.value.status)
    let registerModel=Object.assign({},this.userInfoForm.value)
    this.authService.register(registerModel).subscribe(response=>{
     this.toastrService.success(response.message)
      
    })
  }
}

personelAdded(){
  this.personAdd=true
  this.personelAthorizationControl=false
}
personelAthorization(){
  this.personAdd=false
  this.personelAthorizationControl=true
}
getAllOperationClaim(){
this.operationCliamService.getAll().subscribe(response=>{
  this.operationClaims=response.data
})
}
athorizationAdded(){
if (this.userAthorizationAddingForm.valid)

{ this.userAthorizationAddingForm.value.operationClaimId=Number(this.userAthorizationAddingForm.value.operationClaimId)
  let userModel=Object.assign({},this.userAthorizationAddingForm.value)  
   this.userOperationClaimService.add(userModel).subscribe(response=>{
  this.toastrService.success(response.message)
   },responseError=>{
     this.toastrService.error(responseError.error.message)
   })
 } else {
   this.toastrService.error("Bilgileri Eksiksiz Giriniz")
}  }

}
