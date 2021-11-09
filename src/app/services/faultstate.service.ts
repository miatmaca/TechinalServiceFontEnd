import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FaultState } from 'app/models/faultState';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaultstateService {
  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient :HttpClient) { }

  getAllFaultState() :Observable<ListResponseModel<FaultState>>{

    let newPath=this.apiUrl+"faultstates/getall"
     return this.httpClient.get<ListResponseModel<FaultState>>(newPath);
   }
}
