import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonDto } from 'app/models/commondto';
import { EndData } from 'app/models/endData';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndDataService {
  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient:HttpClient) { }
  getAll() :Observable<ListResponseModel<EndData>>{

    let newPath=this.apiUrl+"endatas/getall"
     return this.httpClient.get<ListResponseModel<EndData>>(newPath);
   }
   add(endData  :EndData):Observable<ResponseModel>
   {
    let newPath="https://localhost:44376/api/enddatas/add"

    return this.httpClient.post<ResponseModel>(newPath,endData)
   }
   getCommonDto() :Observable<ListResponseModel<CommonDto>>{

    let newPath=this.apiUrl+"enddatas/getcommondto"
     return this.httpClient.get<ListResponseModel<CommonDto>>(newPath);
   }
}
