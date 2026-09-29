import { Component, inject } from '@angular/core';
import { TaskService } from '../task-service';
import { TaskItem } from '../task-item/task-item';

@Component({
  imports: [TaskItem],
  selector: 'app-task-list',
  styleUrl: './task-list.scss',
  templateUrl: './task-list.html'
})

export class TaskList {
  readonly taskService = inject(TaskService);
  readonly tasks = this.taskService.tasks;
}