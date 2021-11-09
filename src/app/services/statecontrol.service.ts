import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { StateControl } from 'app/models/statecontrol';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateControlService {

  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient :HttpClient) { }

  getAllStateControl() :Observable<ListResponseModel<StateControl>>{

    let newPath=this.apiUrl+"statecontrols/getall"
     return this.httpClient.get<ListResponseModel<StateControl>>(newPath);
   }
}

