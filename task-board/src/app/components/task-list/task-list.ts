import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskItem } from '../task-item/task-item';

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
  readonly doneCount = computed(() => this.tasks().filter((task) => task.done).length);
}
