import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'app/models/brand';
import { Oem } from 'app/models/oem';
import { BrandService } from 'app/services/brand.service';
import { OemService } from 'app/services/oem.service';
import { UserService } from 'app/services/user.service';

import * as $ from 'jquery'


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  brandAddForm:FormGroup
  brands:Brand[]
  oems:Oem[]
  filterText="";
    constructor(private formBuilder:FormBuilder,
                private brandService:BrandService,private oemService:OemService,
                ) { }
  
    ngOnInit() {
      this.createForm();
      this.getAllBrand();    
   
    }
  
    createForm(){

  this.brandAddForm=this.formBuilder.group({
    brandName:["",Validators.required],
    status:["",Validators.required],
    createdBy:[Number(localStorage.getItem('userId')),Validators.required],
    modifiedBy:[Number(localStorage.getItem('userId')),Validators.required]
  })
    }
    getAllBrand(){
      this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
      })
      
      }
      getAllOem(){
        this.oemService.getOemAll().subscribe(response=>{
          this.oems=response.data
        })
      }
  brandAdd(){
  if (this.brandAddForm.valid)
  { 
    this.brandAddForm.value.status=Number(this.brandAddForm.value.status)
    let brandModel=Object.assign({},this.brandAddForm.value)
    this.brandService.add(brandModel).subscribe(response=>{
  
        alert(response.message);
    },responseError=>{
      alert(responseError.error.message)
    })
  }
  else {
    alert("Bilgileri Doğru Giriniz")  
  }}  
  brandUpdate()
  {    
    let brandModel=Object.assign({},this.brandAddForm.value)
    console.log(brandModel);
    
   if (this.brandAddForm.valid)
   {
     this.brandAddForm.value.status=Number(this.brandAddForm.value.status)
     let brandModel=Object.assign({},this.brandAddForm.value)

     this.brandService.brandUpdate(brandModel).subscribe(response=>{
       alert(response.message)
       }) }
     else {
       alert("Bilgileri Doğru Giriniz");
     }    
  }





  }