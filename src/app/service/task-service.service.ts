import { Task } from './../Task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private url:string= 'https://localhost:7104/api/TaskContainers'
  constructor(private http: HttpClient) { }

getTask(){
  return this.http.get<Task[]>(this.url);
}
postTask(task:Task):Observable<Task>{
  console.log("task post"+task);
  return this.http.post<Task>(this.url,task);
}
putTask(task:Task,id):Observable<Task>{
  return this.http.put<Task>(`${this.url}/${id}`,task)
}
}
