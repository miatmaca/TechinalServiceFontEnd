import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from 'app/typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {  ProductInfoComponent } from 'app/product-info/product-info.component';


import { ControlGuard } from 'app/guards/control.guard';
import { AuthGuard } from 'app/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: '',      component: DashboardComponent, },    
    { path: 'dashboard',      component: DashboardComponent,},    
    { path: 'table-list',     component: TableListComponent ,canActivate:[ControlGuard]},
    { path: 'user-profile',   component: UserProfileComponent ,canActivate:[ControlGuard]},
    { path: 'typography',     component:TypographyComponent ,canActivate:[ControlGuard]},
    { path: 'icons',          component: IconsComponent, canActivate:[ControlGuard]},
    // { path: 'maps',           component: MapsComponent ,canActivate:[ControlGuard]},
    { path: 'notifications',  component: NotificationsComponent ,canActivate:[AuthGuard] },
    { path: 'upgrade',        component: UpgradeComponent,canActivate:[ControlGuard] },
    { path: 'productInfo',    component:ProductInfoComponent ,canActivate:[ControlGuard]},
   
];
