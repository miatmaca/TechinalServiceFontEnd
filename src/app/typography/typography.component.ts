import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaultState } from 'app/models/faultState';
import { MadeProces } from 'app/models/madeProces';
import { ProcesState } from 'app/models/procesState';
import { ProductInfo } from 'app/models/productInfo';
import { ProductInfoDto } from 'app/models/productInfoDto';
import { StateControl } from 'app/models/statecontrol';
import { FaultstateService } from 'app/services/faultstate.service';
import { MadeprocesService } from 'app/services/madeproces.service';
import { ProcesStateService } from 'app/services/proces-state.service';
import { ProductInfoService } from 'app/services/product-info-.service';
import { StateControlService } from 'app/services/statecontrol.service';
import * as $ from 'jquery'
import { data } from 'jquery';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
productInfos:ProductInfoDto[]

filterText="";
productId:number
serialNo:string
faultName:string

madeProcessAddForm:FormGroup
faultStates:FaultState[]
procesStates:ProcesState[]
stateControls:StateControl[]
madeProcess:MadeProces[]
  constructor(private productInfoService:ProductInfoService,
              private faultStateService:FaultstateService,
              private procesStateService:ProcesStateService,
              private stateControlService:StateControlService,
              private madeProcesService:MadeprocesService,
              private formBuilder:FormBuilder) { }

  ngOnInit() {
this.getAllProductInfo();
this.getAllFault();
this.createForm();

$("#ekle").click(function(){
  $.ajax({
    type:"GET",
    url:"https://localhost:44376/api/productinfos/getall",
    success:function(response){
      console.log(response.data);            
    }    
    }) 
})
}  
createForm(){
  this.madeProcessAddForm=this.formBuilder.group({
    productId:["",Validators.required],
    faultName:["",Validators.required],
    stateControl:["",Validators.required],
    madeProcess:["",Validators.required],
    stateNote:["",Validators.required],
    createdBy:[Number(localStorage.getItem('userId')),Validators.required]
  })
}
  getAllProductInfo(){
    let stateName="Serviste"
    this.productInfoService.getServiceDto(stateName).subscribe(response=>{
      this.productInfos=response.data
      
    },responseError=>{
      console.log("Sistem Hatası");
      
    })

  }
  save(productId:number,serialno:string,faultName:string)
  {

   this.productId=productId
   this.serialNo=serialno
   this.faultName=faultName
    
  }

  getAllFault(){
    this.faultStateService.getAllFaultState().subscribe(response=>{
      this.faultStates=response.data

    })

    this.procesStateService.getAllProcesState().subscribe(response=>{
      this.procesStates=response.data
      console.log(this.procesStates);
      
    })

    this.stateControlService.getAllStateControl().subscribe(response=>{
      this.stateControls=response.data
            
    })

  }
madeProcesAdd(){

if (this.madeProcessAddForm.valid)
{
 
  
   this.madeProcessAddForm.value.stateControl=Number(this.madeProcessAddForm.value.stateControl)
  this.madeProcessAddForm.value.madeProcess=Number(this.madeProcessAddForm.value.madeProcess)  
  
  let madeProcesModel=Object.assign({},this.madeProcessAddForm.value);
  console.log(madeProcesModel);

  this.madeProcesService.madeProcesAdd(madeProcesModel).subscribe(response=>{
      alert("Başarı İle Eklendi")

     
    this.productInfoService.stateUpdate(madeProcesModel).subscribe(response=>{
      alert("Güncellendi")
    })
      
  })

}
else {
alert("Başarısı")
}
}
  

}
