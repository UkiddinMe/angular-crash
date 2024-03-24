import { Component } from '@angular/core';
import { Task } from '../../Task';
// import { TASKS } from '../../mock-tasks';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //this.tasks = this.taskService.getTasks();
    //Usually this isn't how you wanna do it, you should use observables instead because you're gonna deal with asynchronous data.
    //We're just fetching a file right here.
  
    //you cannot use it the same way then but you have to do i tas it follows.
    //You subscribe to an observable, so you can constantly watch it.
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
    // è come quando hai una promise.
  
  }

}
