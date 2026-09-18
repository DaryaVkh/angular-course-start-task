import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Task } from '../task.model';
import { TimeAgoPipe } from '../time-ago-pipe';

@Component({
  selector: 'app-task-item',
  imports: [TimeAgoPipe],
  template: `
    <label class="row">
      <input type="checkbox" [checked]="task().done" (change)="toggled.emit(task().id)" />
      <span class="title">{{ task().title }}</span>
      <span class="date">{{ task().createdAt | timeAgo }}</span>
    </label>
  `,
  styles: `
    .row {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .title {
      font-size: 16px;
    }
    .date {
      color: gray;
      font-size: 13px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItem {
  readonly task = input.required<Task>();
  readonly toggled = output<number>();
}
