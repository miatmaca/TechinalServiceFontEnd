import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClaimDto } from 'app/models/claimdto';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { User } from 'app/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44376/api/";
  constructor(private httpClient :HttpClient) { }

  getAllUser() :Observable<ListResponseModel<User>>{

    let newPath=this.apiUrl+"users/getall"
     return this.httpClient.get<ListResponseModel<User>>(newPath);
   }

   getUserByEmail(email:string) :Observable<ListResponseModel<User>>{

    let newPath=this.apiUrl+"users/getbyemail?email="+email
     return this.httpClient.get<ListResponseModel<User>>(newPath);
   }
  
   getByUserId(userId:number) :Observable<User>{

    let newPath=this.apiUrl+"users/getbyuserid?userId="+userId
     return this.httpClient.get<User>(newPath);
   }
   userUpdate(user:User):Observable<User>
   {let newPath=this.apiUrl+"users/update"
   return this.httpClient.post<User>(newPath,user);
   }

  getcontrols():Observable<ClaimDto> {
    let userId=localStorage.getItem('userId')
    let newPath=this.apiUrl+"users/getclaimcontrol?userId="+userId
    return this.httpClient.get<ClaimDto>(newPath)
  }

}

