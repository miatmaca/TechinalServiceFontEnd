import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'app/models/customer';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient :HttpClient) { }
  
  getAllCustomer() :Observable<ListResponseModel<Customer>>{

    let newPath=this.apiUrl+"customers/getall"
     return this.httpClient.get<ListResponseModel<Customer>>(newPath);
   }
   getCustomerGsm(gsm:string) :Observable<ListResponseModel<Customer>>{

    let newPath=this.apiUrl+"customers/getcustomergsm?gsm="+gsm
     return this.httpClient.get<ListResponseModel<Customer>>(newPath);
   }
   customerAdd(customer:Customer):Observable<ResponseModel>{
     let newPath=this.apiUrl+"customers/add"
     return this.httpClient.post<ResponseModel>(newPath,customer);
   }
}
