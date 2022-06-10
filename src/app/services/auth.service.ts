import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangedPassword } from 'app/models/changedPassword';
import { LoginModel } from 'app/models/loginModel';
import { RegisterModel } from 'app/models/registerModel';
import { ResponseModel } from 'app/models/responseModel';
import { SingleResponseModel } from 'app/models/singleResponseModel';
import { TokenModel } from 'app/models/tokenModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:44376/api/auths/";
  constructor(private httpClient:HttpClient) { }

register(registerModel:RegisterModel){
console.log(registerModel);
registerModel.createdBy=1;
registerModel.modifiedBy=1;
return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel);

}
login(loginModel:LoginModel){
  return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel);
}
 changedPassword(changedPassword:ChangedPassword)
 {
   let newPath=this.apiUrl+"changedPassword"
  return this.httpClient.post<ResponseModel>(newPath,changedPassword);
 }


  isAuthenticated()
{ 
    if (localStorage.getItem("token"))
  {
    return true;
  }
else 
{
  return false;
}}
// isControl(){
// if (localStorage.getItem("token") )
  
// }
}
