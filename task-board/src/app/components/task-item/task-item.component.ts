import { Component, input, output } from '@angular/core';
import { Task } from '../../types/task.model';
import { TimeAgoPipe } from '../../pipes/time-ago-pipe';

@Component({
  imports: [TimeAgoPipe],
  selector: 'app-task-item',
  styles: ``,
  template: `<div>
    <h3>{{ task().title }}</h3>
    <p>{{ task().done }}</p>
    <p class="date">{{ task().createdAt | timeAgo }}</p>
    <input type="checkbox" [checked]="task().done" (change)="toggled.emit(task().id)" />
  </div>`,
})
export class TaskItemComponent {
  readonly task = input.required<Task>();
  readonly toggled = output<Task['id']>();
}
