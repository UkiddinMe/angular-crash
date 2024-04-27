import { Component } from '@angular/core';
import { Task } from '../../Task';
// import { TASKS } from '../../mock-tasks';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
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

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => this.tasks = this.tasks.filter(t => t.id !== task.id)
    );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService.addoTasko(task).subscribe((task) => (this.tasks.push));
    this.tasks.push(task);
  }
}