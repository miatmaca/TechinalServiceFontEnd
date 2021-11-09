import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'app/models/customer';
import { AuthService } from 'app/services/auth.service';
import { CustomerService } from 'app/services/customer.service';
import { UserService } from 'app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
loginForm:FormGroup
userId:string
customers:Customer[]
filterText="";
  constructor(private formBuilder:FormBuilder,
              private authService:AuthService,
              private router:Router,
              private userService:UserService,
              private customerService:CustomerService,
              private toastrService:ToastrService
              ) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.getallcustomer();
  }
getallcustomer(){
  this.customerService.getAllCustomer().subscribe(response=>{
this.customers=response.data
  })
}


  createLoginForm(){
    this.loginForm=this.formBuilder.group({

    email:["",Validators.required],
    password:["",Validators.required]
    
    
    
    })
    }
    add(){
      console.log("naber");
      
    }
    login (){

      if (this.loginForm.valid)
      {
      let loginModel=Object.assign({},this.loginForm.value)
      this.getUserByEmail(this.loginForm.value.email)          
      this.authService.login(loginModel).subscribe(response=>{
        
       localStorage.setItem("token",response.data.token)
       localStorage.setItem("email",this.loginForm.value.email) 
       localStorage.setItem("userId",this.userId)
        
        this.userService.getcontrols().subscribe(response=>{
          localStorage.setItem("claim",response.claimName)
        })

      this.router.navigate(['dashboard']).then((r) => window.location.reload());
       this.toastrService.success(response.message)
       
    
      },responseError=>{
        alert(responseError.error)
        console.log(responseError);
        
      }
      )}
      else 
      {
      this.toastrService.error("Bilgileri Kontrol Ediniz")
      }




      }
      getUserByEmail(email:string){
        this.userService.getUserByEmail(email).subscribe(response=>{
          response.data.forEach(element => {
          this.userId=JSON.stringify(element.id)    
            
           
            
          });

        })


      }
}
