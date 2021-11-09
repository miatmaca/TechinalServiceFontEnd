import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { MadeProces } from 'app/models/madeProces';
import { MadeProcessDto } from 'app/models/madeprocessDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MadeprocesService {
  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient:HttpClient) { }
  
  

   madeProcesAdd(madeproces:MadeProces):Observable<Response>
   {  
     let newPath=this.apiUrl+"MadeProcess/add"

return this.httpClient.post<Response>(newPath,madeproces)

   }

getAllDto(productId:number):Observable<ListResponseModel<MadeProcessDto>>{
  let newPath=this.apiUrl+"madeprocess/getallDto?productId="+productId

  return this.httpClient.get<ListResponseModel<MadeProcessDto>>(newPath)
}



// getProductInfoDto() :Observable<ListResponseModel<ProductInfoDto>>{
   
//   let newPath=this.apiUrl+"productinfos/getproductinfodto"
//    return this.HttpClient.get<ListResponseModel<ProductInfoDto>>(newPath);
//  }
}
