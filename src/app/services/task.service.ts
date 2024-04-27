import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
// import { Output } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  //devi ricordarti di lanciare il comando "npm run server" perché "server" è il nome che gli abbiamo dato in package.json
  //Ogni tanto sto figlio di puttana non funziona come dovrebbe con le put e le delete, devi restartare il server e funziona.

  constructor(private bcknd: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.bcknd.get<Task[]>(this.apiUrl);
  }
  
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.bcknd.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.bcknd.put<Task>(url, task, httpOptions);
  }

  addoTasko(task: Task): Observable<Task> {
    return this.bcknd.post<Task>(this.apiUrl, task, httpOptions);
  }
}
