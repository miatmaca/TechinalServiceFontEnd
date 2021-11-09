import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

  
  { path: '/dashboard', title: 'Ana Sayfa',  icon: 'dashboard', class: '' },
    { path: '/productInfo', title: 'Ürün Ekle',  icon:'library_books', class: '' },
   { path: '/typography', title: 'Teknik Servis',  icon:'library_books', class: '' },    
    { path: '/icons', title: 'Bilgiler',  icon:'bubble_chart', class: '' },
    { path: '/table-list', title: 'Ürün Geçmişi',  icon:'content_paste', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },   
    { path: '/notifications', title: 'Yetkilendirme',  icon:'notifications', class: '' },
  //  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },   
     { path: '/user-profile', title: 'Kullanıcı Profili ',  icon:'person', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router:Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log(this.menuItems);
    
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  logout(){
    localStorage.clear();
    alert("Çıkış Yapıldı");
    this.router.navigate(["home"])
    
}
}
