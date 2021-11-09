import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ClaimDto } from 'app/models/claimdto';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlGuard implements CanActivate {
claimControl:string

  constructor (private userService:UserService,private authService:AuthService,private route:Router,private toastrService:ToastrService )  {}
       
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
     
      
      this.claimControl=localStorage.getItem('claim');
      
    
     if (this.claimControl=="Boss" || this.claimControl=="Personel")
     { 
      
       return true;
      }
          
       else{
         this.toastrService.error("Yetkiniz Yok")
       }
     
          // if (this.authService.isAuthenticated())
          // {
          //   if (this.claimControl=="Boss")
          //       {
          //         return true;
          //       }
          //       else{
          //         return false;
          //       }
          // }
          // else {
          //   this.route.navigate(["home"])
          //  alert("Sisteme Giriş Yapınız")
          //   return false;
          // }
  
  
  
        }
  
}
