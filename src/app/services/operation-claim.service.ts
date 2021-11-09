import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { OperationClaim } from 'app/models/operationClaim';
import { ResponseModel } from 'app/models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationClaimService {
  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient:HttpClient) { }
  getAll(): Observable <ListResponseModel<OperationClaim>>
{
let newPath=this.apiUrl+"operationclaims/getall"
return  this.httpClient.get<ListResponseModel<OperationClaim>>(newPath);
}
add(operationClaim:OperationClaim):Observable<ResponseModel>{
  let newPath="operationclaims/add"
return  this.httpClient.post<ResponseModel>(newPath,operationClaim)
}
}
