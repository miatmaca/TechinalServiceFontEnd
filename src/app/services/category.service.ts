import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'app/models/category';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient:HttpClient) { }

  getCategoryAll() :Observable<ListResponseModel<Category>>{
   
    let newPath=this.apiUrl+"categories/getall"
     return this.httpClient.get<ListResponseModel<Category>>(newPath);
   }
   getAllByOemId(oemId:string) :Observable<ListResponseModel<Category>>{
    
    let newPath=this.apiUrl+"categories/getalloemıd?oemId="+oemId
     return this.httpClient.get<ListResponseModel<Category>>(newPath);
   }

   categoryAdd(categories:Category):Observable<ResponseModel>
   {
    let newPath=this.apiUrl+"categories/add"
    
    return this.httpClient.post<ResponseModel>(newPath,categories)
   }

   categoryUpdate(categories:Category):Observable<ResponseModel>
   {
    let newPath=this.apiUrl+"categories/update"
    return this.httpClient.post<ResponseModel>(newPath,categories);
   }

   getallbystatusone():Observable<ListResponseModel<Category>>{
    let newPath=this.apiUrl+"categories/getallbystatusone"
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
   }
}
