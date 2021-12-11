import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from 'app/typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ProductInfoComponent } from 'app/product-info/product-info.component';
import { FilterPipePipe } from 'app/pipes/filter-pipe.pipe';
import { TotalPricePipePipe } from 'app/pipes/total-price-pipe.pipe';
import { FilterListPipe } from 'app/pipes/filter-list.pipe';
import { FilterCategoryPipe } from 'app/pipes/filter-category.pipe';
import { FilterOemPipe } from 'app/pipes/filter-oem.pipe';
import { FilterCustomerPipe } from 'app/pipes/filter-customer.pipe';
import { CommonfilterPipe } from 'app/pipes/commonfilter.pipe';
import { UserPipe } from 'app/pipes/user.pipe';







@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    
  
  ],
  declarations: [
    
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ProductInfoComponent,
    FilterPipePipe,
    FilterListPipe,
    FilterOemPipe,
    FilterCategoryPipe,
    FilterCustomerPipe,
    CommonfilterPipe,
    UserPipe,
    
   

  ]
})

export class AdminLayoutModule {}
