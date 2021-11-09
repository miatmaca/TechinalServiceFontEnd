import { Component, OnInit } from '@angular/core';
import { Brand } from 'app/models/brand';
import { CommonDto } from 'app/models/commondto';
import { AuthService } from 'app/services/auth.service';
import { BrandService } from 'app/services/brand.service';
import { EndDataService } from 'app/services/end-data.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
brands:Brand[]
authenticated :boolean
commonDtos:CommonDto[]
filterText=""
  constructor(private brandService:BrandService,private authService:AuthService,private endDataService:EndDataService,
              ) { }

  ngOnInit() {
    this.getAllBrand();
  this.getAllCommonDto();
  }

getAllBrand(){

  this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data;   
   })  
}
getAllCommonDto(){
this.endDataService.getCommonDto().subscribe(response=>{
  this.commonDtos=response.data
})
}
IsAuthenticated(){
  if (this.authService.isAuthenticated()) {

    this.authenticated  = true;
  } else {
    this.authenticated  = false;
  }
}
}
