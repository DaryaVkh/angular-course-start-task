import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import { Task } from '../task.model';
import { TimeAgoPipe } from '../time-ago-pipe';

@Component({
  selector: 'app-task-item',
  imports: [TimeAgoPipe],
  template: `
    <div class="task-item">
      <input
        type="checkbox"
        [checked]="task().done"
        (change)="toggled.emit(task().id)"
      />
      <span class="title">{{ task().title }}</span>
      <span class="date">{{ task().createdAt | timeAgo }}</span>
    </div>
  `,
  styles: `
    .task-item {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .date {
      color: gray;
      font-size: 0.85em;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItem {
  readonly task = input.required<Task>();
  readonly toggled = output<number>();
}
