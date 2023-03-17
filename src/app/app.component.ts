import { DisplaySideNavbarService } from './service/display-side-navbar.service';
import { Component, OnInit,AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterContentChecked {
  title = 'KSApp';
  constructor(private barService: DisplaySideNavbarService){}
  
  toggle = this.barService.gettoggle();
  displayModel:boolean = false;

  ngOnInit(): void {


  }
  ngAfterContentChecked(): void {
    this.toggle=this.barService.gettoggle();

  }



}


