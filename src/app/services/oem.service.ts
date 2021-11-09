import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { Oem } from 'app/models/oem';
import { ResponseModel } from 'app/models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OemService {
  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient:HttpClient) { }
 
  getOemAll() :Observable<ListResponseModel<Oem>>{

    let newPath=this.apiUrl+"oems/getall"
     return this.httpClient.get<ListResponseModel<Oem>>(newPath);
   }

   add(oem  :Oem):Observable<ResponseModel>
   {
    let newPath=this.apiUrl+"oems/add"

    return this.httpClient.post<ResponseModel>(newPath,oem)
   }
  
   oemUpdate(oem:Oem):Observable<ResponseModel>
   {
    let newPath=this.apiUrl+"oems/update"
    return this.httpClient.post<ResponseModel>(newPath,oem);
   }

   getallbystatusone():Observable<ListResponseModel<Oem>>{
    let newPath=this.apiUrl+"oems/getallbystatusone"
    return this.httpClient.get<ListResponseModel<Oem>>(newPath);
   }
}
