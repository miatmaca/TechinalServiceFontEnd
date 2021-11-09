import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  claimControl:string
 constructor (private userService:UserService,private toastrService:ToastrService) {}
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
        this.claimControl=localStorage.getItem('claim')
         
     
       if (this.claimControl=="Boss" )
       { 
        
         return true;
        }
            
         else{
          this.toastrService.error("Yetkiniz Yok")
         }
  }
  
}
