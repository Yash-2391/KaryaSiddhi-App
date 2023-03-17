import { Component, OnInit,EventEmitter } from '@angular/core';
import { DisplaySideNavbarService } from 'src/app/service/display-side-navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  displaySideNav:boolean=false;
  constructor(private barService: DisplaySideNavbarService ) { }
  toggleSideNavbar(){
      this.barService.onBarClick();
      console.log(this.barService.toggleSideNav);
  }
  ngOnInit(): void {

  }

}
