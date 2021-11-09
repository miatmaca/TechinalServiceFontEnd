import { DatePipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EndData } from 'app/models/endData';
import { FaultState } from 'app/models/faultState';
import { MadeProcessDto } from 'app/models/madeprocessDto';
import { ProductInfo } from 'app/models/productInfo';
import { ProductInfoDto } from 'app/models/productInfoDto';
import { StateControl } from 'app/models/statecontrol';
import { EndDataService } from 'app/services/end-data.service';
import { FaultstateService } from 'app/services/faultstate.service';
import { MadeprocesService } from 'app/services/madeproces.service';
import { ProductInfoService } from 'app/services/product-info-.service';
import { StateControlService } from 'app/services/statecontrol.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productInfoForm:FormGroup
  productInfos:ProductInfoDto[]
  stateControls:StateControl[]
  faultStates:FaultState[]
  madeProcessDtos:MadeProcessDto[]
  endData:EndData[]
  numberOfAcceptedProduct:number
  numberOfReadyProduct:number
  numberOfRepairProduct:number
  selectedState:string
  date:Date

productId:number
brandName:string
oem:string
category:string
serialNo:string
faultName:string
stateControl:string
customerName:string
totalPrice:number=0
filterText=""
  constructor(private productInfoService:ProductInfoService,
    private stateControlService:StateControlService,
    private formBuilder:FormBuilder,
    private faultStateService:FaultstateService,private madeProcesService:MadeprocesService,
    private endDataService:EndDataService,
    private toastrService:ToastrService) { }

 
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
      let now =new Date()
      this.date=now
      this.getAllProductInfo();    
      this.getProductNumberInfo();
      this.getAllStateControl();     
      this.createFrom();
  }
  add(productInfo:number){
  
    this.productId=productInfo   
    this.productInfoService.getAllByProductId(this.productId).subscribe(response=>{
      this.brandName=response.brandName
      this.category=response.category
      this.oem=response.oemName
      this.serialNo=response.serialNo
      this.faultName=response.faultName
      this.customerName=response.userNameSurname   
      this.stateControl=response.stateName
      
    })
    console.log(this.stateControl);
    
  }
  createFrom(){
    this.productInfoForm=this.formBuilder.group({
      productId:["",Validators.required],
    brandName:["",Validators.required],
    oem:["",Validators.required],
    category:["",Validators.required],
    serialNo:["",Validators.required],
    faultName:["",Validators.required],
      stateControl:["",Validators.required],
      customerName:["",Validators.required],
      modifiedBy:[Number(localStorage.getItem('userId')),Validators.required]
    })
  }

  DtoListed(){
    if (this.selectedState=="Hepsi")
    {
      this.productInfoService.getProductInfoDto().subscribe(response=>{
        this.productInfos=response.data
      })
    }
    else {
           this.productInfoService.getServiceDto(this.selectedState).subscribe(response=>{
             this.productInfos=response.data
             
           })
  }
}
  getAllStateControl(){
    this.stateControlService.getAllStateControl().subscribe(response=>{
    this.stateControls=response.data    
  
      this.faultStateService.getAllFaultState().subscribe(response=>{
      this.faultStates=response.data   
      })  })  }   
    
  getAllProductInfo(){
this.productInfoService.getProductInfoDto().subscribe(response=>{

  this.productInfos=response.data
})  }
getProductNumberInfo(){
      this.productInfoService.NumberOfItemsInAccepted().subscribe(response=>{
             this.numberOfAcceptedProduct=response
    })
    this.productInfoService.NumberOfItemsInReady().subscribe(response=>{
      this.numberOfReadyProduct=response
})
this.productInfoService.NumberOfItemsInRepair().subscribe(response=>{
  this.numberOfRepairProduct=response
})}
processStatusUpdate()
{
  if (this.productInfoForm.valid)  
  {
     this.productInfoForm.value.stateControl=Number(this.productInfoForm.value.stateControl)   
    
     let productInfoModel=Object.assign({},this.productInfoForm.value);
    this.productInfoService.stateUpdate(productInfoModel).subscribe(response=>{
      this.toastrService.success("İşlem Gerçekleştirildi")
       this.getAllProductInfo();
    
    })}
  
  }

getAllMadeProcesDto(productId:number){
  this.totalPrice=0
this.madeProcesService.getAllDto(productId).subscribe(response=>{
this.madeProcessDtos=response.data

response.data.forEach(element => {
  localStorage.setItem('productId',JSON.stringify(element.productId))
 this.totalPrice =this.totalPrice+element.price
 });}) }

makeThePayment(){

  let productId=Number(localStorage.getItem('productId'))  
  this.productInfoService.makeThePayment(productId).subscribe(response=>{
    this.toastrService.success("İşlem Gerçekleştirildi");    
})   
this.productInfoService.getAllEndDataDto(productId).subscribe(response=>{
  this.endData=response.data   
  if (this.endData!=null){

  this.endData.forEach(element => {
  this.endDataService.add(element).subscribe(response=>{     
    
  })});  
  }})
}}
