import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  imports: [TaskItemComponent],
  selector: 'app-task-list',
  styleUrl: './task-list.component.scss',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  readonly taskService = inject(TaskService);
  readonly tasks = this.taskService.tasks;
}
