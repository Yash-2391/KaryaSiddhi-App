import { TaskServiceService } from './../../service/task-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/Task';
import { take } from 'rxjs';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {
  displayModel: boolean=false
  myTask: boolean=true
taskList:Task[]  = []
statusTaskList:Task[] = [];
completedTask:Task[] = [];
inCompleteTask:Task[] = [];
threeHighCompletedTask:Task[] = [];
threeHighInCompletedTask:Task[] = [];
completeTodayTask:Task[] = [];
inCompleteTodayTask:Task[] = [];
completeLaterTask:Task[] = [];
inCompleteLaterTask:Task[] = [];
taskStatus: string = "c"
completeTask:string = "complete"
currentDate = new Date()

constructor(private router:Router,private service : TaskServiceService) { }

  ngOnInit(): void {
    this.service.getTask().subscribe((res)=>{
      this.taskList = res;
      this.completedTask = this.taskList.filter(ele =>{
        return ele.taskStatus === "complete"
      })
      this.inCompleteTask = this.taskList.filter(ele =>{
        return ele.taskStatus === "incomplete"
      })
      console.log(this.completedTask.length)
      console.log(this.inCompleteTask.length)
      this.threeHighCompletedTask = this.taskList.filter(ele => {
        return (ele.taskPriority === "high" && ele.taskStatus === "complete")
      })
      console.log(this.threeHighInCompletedTask)
      this.threeHighInCompletedTask = this.taskList.filter(ele => {
        return (ele.taskPriority === "high" && ele.taskStatus === "incomplete")
      })
      console.log(this.threeHighInCompletedTask)
      this.completeTodayTask = this.taskList.filter(ele=>{
        return (this.currentDate.toISOString().substring(0, 10) === ele.dueDate && ele.taskStatus === "complete")
      })
      console.log("todays task "+ this.completeTodayTask)
      this.inCompleteTodayTask = this.taskList.filter(ele=>{
        return (this.currentDate.toISOString().substring(0, 10) === ele.dueDate && ele.taskStatus === "incomplete")
      })
      console.log("todays task "+ this.inCompleteTodayTask)
      this.completeLaterTask = this.taskList.filter(ele=>{
        let dueDate = new Date(ele.dueDate);
        return (dueDate.getDate() > (this.currentDate.getDate() + 2) && ele.taskStatus === "complete")
      })
      console.log("todays task "+ this.completeLaterTask)
      this.inCompleteLaterTask = this.taskList.filter(ele=>{
        let dueDate = new Date(ele.dueDate);
        return (dueDate.getDate() > (this.currentDate.getDate() + 2) && ele.taskStatus === "incomplete")
      })
      console.log("todays task "+ this.inCompleteLaterTask)
      this.taskList.sort((a,b)=>{
        return  new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      })
      this.completeLaterTask.sort((a,b)=>{
        return  new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      })
      this.inCompleteLaterTask.sort((a,b)=>{
        return  new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      })
    })
  }
  toggleModel() {
    this.displayModel=!this.displayModel;
  }
  unDisplay(data:boolean){
    this.displayModel=data
  }
  reload(data:boolean){
    if(data === true){
      this.ngOnInit();
    }
  }
  onStatusChange(status : string){
    this.taskStatus = status
    console.log("on stataus change "+this.taskStatus)
    this.ngOnInit();
  }

}
