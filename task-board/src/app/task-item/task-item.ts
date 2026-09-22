import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import {TimeAgoPipe} from '../time-ago-pipe';
import {Task} from '../task.model';

@Component({
  selector: 'app-task-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TimeAgoPipe],
  template: `
    <label>
      <input type="checkbox" [checked]="task().done" (change)="toggled.emit(task().id)" />
      {{ task().title }} -
      <span class="date">{{ task().createdAt | timeAgo }}</span>
    </label>
  `,
  styles: `
    label {
      display: block;
    }
  `,
})
export class TaskItem {
  readonly task = input.required<Task>();
  readonly toggled = output<number>();
}
