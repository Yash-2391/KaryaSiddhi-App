import { DisplaySideNavbarService } from './service/display-side-navbar.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './myComp/home/home.component';
import { NavbarComponent } from './myComp/navbar/navbar.component';
import { SideBarComponent } from './myComp/side-bar/side-bar.component';
import { TaskItemComponent } from './myComp/task-item/task-item.component';
import { TaskListComponent } from './myComp/task-list/task-list.component';
import { FooterComponent } from './myComp/footer/footer.component';
import { MyTasksComponent } from './myComp/my-tasks/my-tasks.component';
import { HelpComponent } from './myComp/help/help.component';
import { TaskServiceService } from './service/task-service.service';
import { InputModalComponent } from './myComp/input-modal/input-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SideBarComponent,
    TaskItemComponent,
    TaskListComponent,
    FooterComponent,
    MyTasksComponent,
    HelpComponent,
    InputModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DisplaySideNavbarService,TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
