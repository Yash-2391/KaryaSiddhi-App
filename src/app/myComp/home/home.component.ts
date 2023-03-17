import { MyTasksComponent } from './../my-tasks/my-tasks.component';
import { Router } from '@angular/router';
import { Task } from 'src/app/Task';
import { TaskServiceService } from './../../service/task-service.service';
import { Component, OnChanges, OnInit, SimpleChanges, AfterViewChecked, AfterViewInit, AfterContentInit, DoCheck, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit,OnChanges {
  currentDate = new Date();
  currentTime = new Date().getHours();
  greet: string = '';
  name: string = 'Yash';
  taskList: Task[] = [];
  taskListHigh: Task[] = [];
  completeTaskList: Task[] = [];
  taskListNextThreeDays:Task[] = [];
  displayModel: boolean=false
  myTask:boolean = false

  constructor(
    private taskService: TaskServiceService,
    private router:Router     ) {}

  ngOnChanges(): void {

  }


  ngOnInit(): void {
    if (this.currentTime >= 0 && this.currentTime < 12)
      this.greet = 'Good Morning';
    else if (this.currentTime >= 12 && this.currentTime < 16)
      this.greet = 'Good Afternoon';
    else this.greet = 'Good Evening';
    // console.log(this.currentTime);
    // console.log(this.greet);

    this.taskService.getTask().subscribe((res) => {
      //console.log(res);
      this.taskList = res;
      //console.log(this.taskList);
      // this.taskList.forEach(ele=>{
      //   let duedate = new Date(ele.dueDate)
      //   console.log(duedate.getDate())
      // })
      console.log(this.currentDate.getDate()+2)
      this.taskListNextThreeDays = this.taskList.filter(ele=>{
        let duedate = new Date(ele.dueDate)
        console.log(duedate.getDate())
        return (duedate.getDate() <= (this.currentDate.getDate()+2) && duedate.getDate() >= this.currentDate.getDate() && ele.taskPriority === 'high')
      })
      console.log(this.taskListNextThreeDays)
      this.taskListHigh = this.taskList.filter((ele) => {
        return ele.taskPriority === 'high';
      });
      this.completeTaskList = this.taskList.filter((ele) => {
        return ele.taskStatus === 'complete';
      });
    });
    //console.log("home"+this.displayModel)
    // console.log(this.completeTaskList.length);
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

  }

