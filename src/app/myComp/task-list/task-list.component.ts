import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { TaskServiceService } from 'src/app/service/task-service.service';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    constructor(private http: HttpClient,private service:TaskServiceService,private router:Router) { }
  @Input() taskList:Task[];
  ngOnInit(): void {

  }
}
