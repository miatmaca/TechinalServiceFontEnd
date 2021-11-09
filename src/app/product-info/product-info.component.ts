import { NumberFormatStyle } from '@angular/common';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { Brand } from 'app/models/brand';
import { Category } from 'app/models/category';
import { Customer } from 'app/models/customer';
import { FaultState } from 'app/models/faultState';
import { Oem } from 'app/models/oem';
import { StateControl } from 'app/models/statecontrol';
import { User } from 'app/models/user';
import { BrandService } from 'app/services/brand.service';
import { CategoryService } from 'app/services/category.service';
import { CustomerService } from 'app/services/customer.service';
import { FaultstateService } from 'app/services/faultstate.service';
import { OemService } from 'app/services/oem.service';
import { ProductInfoService } from 'app/services/product-info-.service';
import { StateControlService } from 'app/services/statecontrol.service';
import { UserService } from 'app/services/user.service';

import * as $ from 'jquery'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
productInfoForm:FormGroup
brandAddForm:FormGroup
oemAddForm:FormGroup
categoryAddForm:FormGroup
customerAddForm:FormGroup
customerListForm:FormGroup
numberOfProduct:number
brands:Brand[]
selectedBrand:string
selectedCustomer:string
categories:Category[]
oems:Oem[]
faultStates:FaultState[]
stateControls:StateControl[]
customers:Customer[]
customergsm:Customer[]
users:User[]
selectedOem:string
selectedCategory:string
selectedStateControl:string
selectedFaultName:string
selectedSerial:string
selectedUser:number
filterText=""
brandNameModal=""
oemNameModal=""
userInfo:string
  constructor(private productInfoService:ProductInfoService,
              private formbuilder:FormBuilder,
              private brandService:BrandService,
              private categoryService:CategoryService,
              private oemService:OemService,
              private faultStateService:FaultstateService,
              private stateControlService:StateControlService,
              private customerService:CustomerService,
              private userService:UserService,
              private toastrService:ToastrService
              ) { }

  ngOnInit(): void {
    this.getNumberOfProduct()
    this.createProductInfoForm();
    this.getBrand();
    //this.getCategoryAll();
    this.getOemAll();
    this.getAllCustomer();
    this.getAllFaultState();
    this.getAllStateControl();
    this.getAllUser();
    this.getByUserId();
    this.getAllUserInfo();
    this.getAllByOemId();

    $('#oem').change(function () {     
      $('#category').empty();
      $('#category').append($('<option>',{                                          
        value:0,
        text:"Kategori Seçiniz"                                     
      }));
            let oem = $(this).val(); 
      if (oem != null && oem != ' ') {
          $.ajax({
              type: "get",
              url: "https://localhost:44376/api/categories/getalloemıd?oemId=" + oem,
              success: function (response) {                   
                    $.each(response,function(index,value){                     
                      
                      $('#category').append($('<option>',{                                          
                       value:value.categoryName,
                       text:value.categoryName
                                             
                       
                     }));
                   });              
                    },error:function(){
                      alert("HATA")
                    }                    
              })
          }
      })
  }
     

    
    //ajax.getJSON("https://localhost:44376/api/categories/getall").subscribe(response=>console.log(response));    
  
  
  getNumberOfProduct(){

    this.productInfoService.NumberOfItemsInRepair().subscribe(response=>{
      this.numberOfProduct=response
  })
 }
 getBrand(){
this.brandService.getallbystatusone().subscribe(response=>{
  this.brands=response.data
})

 }
 getOemAll(){
 this.oemService.getallbystatusone().subscribe(response=>{
  this.oems=response.data
  console.log(this.oems);
  
  })
   }
// getCategoryAll(){
//     this.categoryService.getallbystatusone().subscribe(response=>{
//     this.categories=response.data    
//     })
//      }

getAllByOemId(){
      this.categoryService.getAllByOemId(this.selectedOem).subscribe(response=>{
      this.categories=response.data     
      
    })
       }
getAllFaultState(){
        this.faultStateService.getAllFaultState().subscribe(response=>{
        this.faultStates=response.data    
        })
         }
    
getAllStateControl(){
          this.stateControlService.getAllStateControl().subscribe(response=>{
          this.stateControls=response.data    
          })
           }

getAllCustomer(){
this.customerService.getAllCustomer().subscribe(response=>{
this.customers=response.data

})

}
getAllUser(){//Kullanılmıyor personel listesini çeker
this.userService.getAllUser().subscribe(response=>{
this.users=response.data

})
}
getByUserId(){//Kullanılmıyor KullanıcıIdye göre  liste çeker
  let userId=Number(localStorage.getItem('userId'))
  this.userService.getByUserId(userId).subscribe(response=>{ 
 // this.users=response.data
  })
  }

createProductInfoForm(){
this.productInfoForm=this.formbuilder.group({
 brandName:["",Validators.required],
 oemName:["",Validators.required],
 categoryName:["",Validators.required],
 serialNo:["",Validators.required],
 faultName:["",Validators.required],
 stateControl:["",Validators.required],
 customerId:["",Validators.min(1)],
 createdBy:[Number(localStorage.getItem('userId')),Validators.required],
 modifiedBy:[Number(localStorage.getItem('userId')),Validators.required],
})
this.brandAddForm =this.formbuilder.group({
  brandName:["",Validators.required], 
  createdBy:[Number(localStorage.getItem('userId')),Validators.required],
  modifiedBy:[Number(localStorage.getItem('userId')),Validators.required],
 })

 this.oemAddForm =this.formbuilder.group({
  oemName:["",Validators.required], 
  createdBy:[Number(localStorage.getItem('userId')),Validators.required],
  modifiedBy:[Number(localStorage.getItem('userId')),Validators.required],
 })

 this.categoryAddForm =this.formbuilder.group({
  categoryName:["",Validators.required], 
  createdBy:[Number(localStorage.getItem('userId')),Validators.required],
  modifiedBy:[Number(localStorage.getItem('userId')),Validators.required],
 })
 this.customerAddForm =this.formbuilder.group({
  firstName:["",Validators.required], 
  lastName:["",Validators.required], 
  email:["",Validators.required], 
  gsm:["",Validators.required], 
  createdBy:[Number(localStorage.getItem('userId')),Validators.required],
  modifiedBy:[Number(localStorage.getItem('userId')),Validators.required],
 })
//  this.customerListForm =this.formbuilder.group({
//   gsm:["",Validators.required], 
//  })

}
add(){
  console.log(this.productInfoForm.value);
  
 if (this.productInfoForm.valid)
 {            
  this.productInfoForm.value.customerId= Number(this.productInfoForm.value.customerId)
  this.productInfoForm.value.createdBy=Number(this.productInfoForm.value.createdBy)
  this.productInfoForm.value.stateControl=Number(this.productInfoForm.value.stateControl)
  let productInfoModel=Object.assign({},this.productInfoForm.value)          
  this.productInfoService.add(productInfoModel).subscribe(response=>{
    this.toastrService.success(response.message)   

       },responseError=>{
        this.toastrService.success(responseError.error.message)
       });
       this.selectedCategory=""
       this.selectedOem=""
       this.selectedCustomer=""
       this.selectedBrand=""  
       this.selectedFaultName=""
       this.selectedStateControl=""  
       this.selectedSerial=""
 }
 else {
   console.log("Bilgileri Eksiksiz Giriniz"); 
 } }
 
 brandAdd(){
  let brandModel=Object.assign({},this.brandAddForm.value)
  this.brandService.add(brandModel).subscribe(response=>{
   this.getBrand()
     this.toastrService.success(response.message)
    this.brandNameModal=""
   
    },responseError=>{
      this.toastrService.error(responseError.error.message)
    })

 }
 oemAdd(){
  let oemModel=Object.assign({},this.oemAddForm.value)
  this.oemService.add(oemModel).subscribe(response=>{
    this.getOemAll();
    this.toastrService.success(response.message)
    this.oemNameModal=""
  },responseError=>{
    this.toastrService.error(responseError.error.message) })

 }
 customerAdd(){
  if (this.customerAddForm.valid)
  {
    let customerModel=Object.assign({},this.customerAddForm.value)
    this.customerService.customerAdd(customerModel).subscribe(response=>{
      this.getAllCustomer()
     this.toastrService.success(response.message)

    },responseError=>{
      this.toastrService.error(responseError.error.message)}
          )
  }
  else {
    alert("Eksiksiz Bilgi Giriniz")
  }

 }
 getAllUserInfo(){
  let userId=Number(localStorage.getItem('userId'));
this.userService.getByUserId(userId).subscribe(response=>{  
  this.userInfo=response.firstName+" "+response.lastName


  })


}
}