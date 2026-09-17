import { Component, computed, inject, signal } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  imports: [TaskItemComponent, SearchBarComponent],
  selector: 'app-task-list',
  styleUrl: './task-list.component.scss',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  readonly taskService = inject(TaskService);
  readonly tasks = this.taskService.tasks;
  readonly term = signal<string>('');

  readonly fliteredTasks = computed(() =>
    this.term()
      ? this.tasks().filter((t) => t.title.toLowerCase().includes(this.term().toLowerCase()))
      : this.tasks(),
  );
}
