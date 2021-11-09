import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TestComponent } from './test/test/test.component';
import { LoginGuard } from './guards/login.guard';




const routes: Routes =[

  {path:'home',component:TestComponent},
  
   {path: '',component: AdminLayoutComponent,
    canActivateChild:[LoginGuard],
     children: [{
      path: '',
    
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  //{path: '/deneme',component: DenemeComponent}
  
 

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
    
  ],
})
export class AppRoutingModule { }
