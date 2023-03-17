import { TaskServiceService } from './../../service/task-service.service';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.css']
})
export class InputModalComponent implements OnInit,AfterViewChecked,AfterViewInit{
  url = this.router.url
  @Input() myTask:boolean = false
@Output() x = new EventEmitter<boolean>();
constructor(private service:TaskServiceService,private router:Router) { }
  ngAfterViewInit(): void {

    }
  ngAfterViewChecked(): void {

  }
customTask:Task={
  taskName:"",
  taskDesc: "",
  taskStatus: "",
  taskPriority:"",
  dueDate:"",
  id:null
}


  ngOnInit(): void {
    console.log(this.myTask)
  }

  onSubmit(data: {taskTitle:string,taskDesc:string,taskPriority:string,dueDate:string}){
    this.customTask = {
      taskName:data.taskTitle,
      taskDesc: data.taskDesc,
      taskStatus: "incomplete",
      taskPriority:data.taskPriority,
      dueDate:data.dueDate.toString(),
    }

    // console.log(this.customTask.taskName+" "+typeof(this.customTask.taskName))
    // console.log(this.customTask.taskDesc+" "+typeof(this.customTask.taskDesc))
    // console.log(this.customTask.taskStatus+" "+typeof(this.customTask.taskStatus))
    // console.log(this.customTask.taskPriority+" "+typeof(this.customTask.taskPriority))
    // console.log(this.customTask.dueDate+" "+typeof(this.customTask.dueDate))
    // console.log(this.customTask.id+" "+typeof(this.customTask.id))
    this.service.postTask(this.customTask).subscribe(res=>{
      console.log(res)
      console.log(this.router.url)


      this.displayModeltoggle()
      if(this.myTask){
        let curr_url = this.router.url;
         console.log(curr_url);
         this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([curr_url]);
      })
    }
      else{
        let curr_url = this.router.url;
         console.log(curr_url);
         this.router.navigateByUrl('/myTask', {skipLocationChange: true}).then(() => {
          this.router.navigate([curr_url]);
      })
      }

    });
  }
  displayModeltoggle(){
    this.x.emit(false);
    if(this.myTask){
      let curr_url = this.router.url;
       console.log(curr_url);
       this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([curr_url]);
    })
  }
    else{
      let curr_url = this.router.url;
       console.log(curr_url);
       this.router.navigateByUrl('/myTask', {skipLocationChange: true}).then(() => {
        this.router.navigate([curr_url]);
    })
    }
   }

  }
