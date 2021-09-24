import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly URi: string = 'http://127.0.0.1:8000/';
  private token: string = localStorage.getItem('token');
  constructor(private http: HttpClient) { }
  public tasks: Task[] = [];

  getTasks(): Observable<any> {
    if(this.token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`,
        })
      }

      return this.http.get(this.URi + 'api/todo', httpOptions);
    }
  }

  addTask(task): Observable<any> {
    if(this.token) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`,
        })
      }
  

      return this.http.post(this.URi + 'api/todo/add', task, httpOptions)
    }
  }



}
