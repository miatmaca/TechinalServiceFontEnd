import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { ResponseModel } from 'app/models/responseModel';
import { User } from 'app/models/user';
import { UserOperationClaim } from 'app/models/userOperationClaim';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {
  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient:HttpClient) { }

getAll(): Observable <ListResponseModel<UserOperationClaim>>
{
let newPath=this.apiUrl+"useroperationclaims/getall"
return  this.httpClient.get<ListResponseModel<UserOperationClaim>>(newPath);
}

add(userOperationClaim:UserOperationClaim):Observable<ResponseModel>{
  let newPath="https://localhost:44376/api/userOperationClaims/add"
return  this.httpClient.post<ResponseModel>(newPath,userOperationClaim)
}

getAllDto(): Observable <ListResponseModel<User>>
{
let newPath=this.apiUrl+"useroperationclaims/getalloperationdto"
return  this.httpClient.get<ListResponseModel<User>>(newPath);
}
}
