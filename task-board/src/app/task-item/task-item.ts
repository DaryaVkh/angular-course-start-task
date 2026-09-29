import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Task } from '../task.model';
import { TimeAgoPipe } from '../time-ago-pipe';

@Component({
  selector: 'app-task-item',
  imports: [TimeAgoPipe],
  template: `
    <label>
      <input type="checkbox" [checked]="task().done" (change)="toggled.emit(task().id)" />
      {{ task().title }} — <span class="date">{{ task().createdAt | timeAgo }}</span>
    </label>
  `,
  styles: `
    label {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItem {
  readonly task = input.required<Task>();
  readonly toggled = output<number>();
}
