import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {TaskService} from '../task-service';
import {TaskItem} from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  imports: [TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskList {
  readonly taskService = inject(TaskService);
  readonly tasks = this.taskService.tasks
}
