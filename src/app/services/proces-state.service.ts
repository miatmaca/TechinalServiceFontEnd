import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { ProcesState } from 'app/models/procesState';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcesStateService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44376/api/";
 

  getAllProcesState() :Observable<ListResponseModel<ProcesState>>{

    let newPath=this.apiUrl+"ProcesStates/getall"
     return this.httpClient.get<ListResponseModel<ProcesState>>(newPath);
   }

}
