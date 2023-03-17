import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplaySideNavbarService {

  constructor() { }

  toggleSideNav: boolean = false;

  onBarClick(){
    this.toggleSideNav = !this.toggleSideNav;
  }

  gettoggle(){
    return this.toggleSideNav;
  }
}
