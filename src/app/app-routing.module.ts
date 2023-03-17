import { HelpComponent } from './myComp/help/help.component';
import { MyTasksComponent } from './myComp/my-tasks/my-tasks.component';
import { HomeComponent } from './myComp/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputModalComponent } from './myComp/input-modal/input-modal.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'myTask',component:MyTasksComponent},
  {path:'help',component:HelpComponent},
  {path:'modal',component:InputModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
