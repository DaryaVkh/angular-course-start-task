import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { TaskService } from '../task.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TaskItem],
  selector: 'app-task-list',
  styleUrl: './task-list.scss',
  templateUrl: './task-list.html',
})
export class TaskList {
  readonly taskService = inject(TaskService);
  readonly tasks = this.taskService.tasks;
}
