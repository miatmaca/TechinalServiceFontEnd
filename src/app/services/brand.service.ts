import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'app/models/brand';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient:HttpClient) { }

  getBrands() :Observable<ListResponseModel<Brand>>{

    let newPath=this.apiUrl+"brands/getall"
     return this.httpClient.get<ListResponseModel<Brand>>(newPath);
   }
   add(brand:Brand):Observable<ResponseModel>
   {
    let newPath="https://localhost:44376/api/brands/add"

    return this.httpClient.post<ResponseModel>(newPath,brand)
   }
   brandUpdate(brand:Brand):Observable<ResponseModel>
   {
    let newPath=this.apiUrl+"brands/update"
    return this.httpClient.post<ResponseModel>(newPath,brand);
   }
   getallbystatusone():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"brands/getallbystatusone"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
   }
}
