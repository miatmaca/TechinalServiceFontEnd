import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from './test/test/test.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { TotalPricePipePipe } from './pipes/total-price-pipe.pipe';
import { FilterListPipe } from './pipes/filter-list.pipe';
import { FilterOemPipe } from './pipes/filter-oem.pipe';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FilterCustomerPipe } from './pipes/filter-customer.pipe';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CommonfilterPipe } from './pipes/commonfilter.pipe';
import { UserPipe } from './pipes/user.pipe';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
   ToastrModule.forRoot({
     positionClass:"toast-bottom-right"
   }),
  
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TestComponent,    
    TotalPricePipePipe,
   
    

  ],
  providers: [ 
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
