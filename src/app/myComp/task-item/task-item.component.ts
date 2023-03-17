import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { TaskServiceService } from 'src/app/service/task-service.service';
import { Task } from 'src/app/Task';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task
  @Input() taskList:Task[];
  completedTask:Task[] = [];
  inCompleteTask:Task[] = [];
  statusTaskList:Task[] =[];
  @Input() taskStatus
  @Output() reload:EventEmitter<boolean> = new EventEmitter<boolean>;
  constructor(private http: HttpClient,private service:TaskServiceService,private router:Router) { }

  ngOnInit(): void {
      console.log(this.taskList)
  }
  taskCompleted(task:Task){

    let curr_url = this.router.url;
    console.log(task.id+" "+"Status "+task.taskStatus);
    //console.log(task.id+" "+task.taskName+" "+"Task Completed")
    task.taskStatus="complete"
    //console.log(task);
    this.service.putTask(task,task.id).subscribe(res=>{
      console.log(task.id+" "+"Status "+task.taskStatus);
      this.reload.emit(true)
      // this.router.navigateByUrl("/",{skipLocationChange: true}).then(()=>{
      //   this.router.navigate([curr_url]);
      // })
    })

  }
}
