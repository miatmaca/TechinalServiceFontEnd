import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'app/models/brand';
import { Category } from 'app/models/category';
import { Oem } from 'app/models/oem';
import { BrandService } from 'app/services/brand.service';
import { CategoryService } from 'app/services/category.service';
import { OemService } from 'app/services/oem.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
brandAddForm:FormGroup
oemAddForm:FormGroup
categoryAddForm:FormGroup
brands:Brand[]
oems:Oem[]
categories:Category[]
filterText="";
filterOem="";
filterCategory="";
  constructor(private formBuilder:FormBuilder,
              private brandService:BrandService,private oemService:OemService,private categoryService:CategoryService,
              ) { }

  ngOnInit() {
    this.createForm();
    this.getAllBrand(); this.getAllOem(); this.getAllCategory();
  }

  createForm(){
this.brandAddForm=this.formBuilder.group({
  brandName:["",Validators.required],
  status:["",Validators.required],
  createdBy:[Number(localStorage.getItem('userId')),Validators.required],
  modifiedBy:[Number(localStorage.getItem('userId')),Validators.required]
})
this.oemAddForm=this.formBuilder.group({
  oemName:["",Validators.required],
  status:["",Validators.required],
  createdBy:[Number(localStorage.getItem('userId')),Validators.required],
  modifiedBy:[Number(localStorage.getItem('userId')),Validators.required]
}) 

this.categoryAddForm=this.formBuilder.group({
  categoryName:["",Validators.required],
  oemId:["",Validators.required],
  status:["",Validators.required],
  createdBy:[Number(localStorage.getItem('userId')),Validators.required],
  modifiedBy:[Number(localStorage.getItem('userId')),Validators.required]

})  }
 
getAllBrand(){
  this.brandService.getBrands().subscribe(response=>{
  this.brands=response.data
  })}
getAllOem(){
    this.oemService.getOemAll().subscribe(response=>{
      this.oems=response.data
    })
  }
  getAllCategory(){
    this.categoryService.getCategoryAll().subscribe(response=>{
      this.categories=response.data
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
  })}
else {
  alert("Bilgileri Doğru Giriniz")  
}}

brandUpdate()
{
if (this.brandAddForm.valid)
{
  this.brandAddForm.value.status=Number(this.brandAddForm.value.status)
  let brandModel=Object.assign({},this.brandAddForm.value)
  this.brandService.brandUpdate(brandModel).subscribe(response=>{
    alert(response.message)
  })}
  else {
    alert("Bilgileri Doğru Giriniz");  }
  }

  oemAdd(){
    if (this.oemAddForm.valid)
    { 
      this.oemAddForm.value.status=Number(this.oemAddForm.value.status)
      let oemModel=Object.assign({},this.oemAddForm.value)
      this.oemService.add(oemModel).subscribe(response=>{
          alert(response.message);
      },responseError=>{
        alert(responseError.error.message)
      })}
    else {
      alert("Bilgileri Doğru Giriniz")  
    }}
    
    oemUpdate()
    {
    if (this.oemAddForm.valid)
    {
      this.oemAddForm.value.status=Number(this.oemAddForm.value.status)
      let oemModel=Object.assign({},this.oemAddForm.value)
      this.oemService.oemUpdate(oemModel).subscribe(response=>{
        alert(response.message)
      },responseError=>{
        alert(responseError.error.message)
      })}
      else {
        alert("Bilgileri Doğru Giriniz");  }
      }

      categoryAdd(){
        if (this.categoryAddForm.valid)
        {      
          this.categoryAddForm.value.oemId=Number(this.categoryAddForm.value.oemId)
          this.categoryAddForm.value.status=Number(this.categoryAddForm.value.status)
          let categoryModel=Object.assign({},this.categoryAddForm.value)
          this.categoryService.categoryAdd(categoryModel).subscribe(response=>{
              alert(response.message);
          },responseError=>{
            alert(responseError.error.message)
          })}
        else {
          alert("Bilgileri Doğru Giriniz")  
        }}
        
        categoryUpdate()
        {                 
        if (this.categoryAddForm.valid)
        {
          this.categoryAddForm.value.status=Number(this.categoryAddForm.value.status)
          this.categoryAddForm.value.oemId=Number(this.categoryAddForm.value.oemId)
          let categoryModel=Object.assign({},this.categoryAddForm.value)
          this.categoryService.categoryUpdate(categoryModel).subscribe(response=>{
            alert(response.message)
          },responseError=>{
            alert(responseError.error)
          })}
          else {
            alert("Bilgileri Doğru Giriniz");  }
          }

}
