import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Task } from '../task.model';
import { TimeAgoPipe } from '../time-ago-pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TimeAgoPipe],
  selector: 'app-task-item',
  styles:  `
    .task {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid #e3e3e3;
      cursor: pointer;
    }
 
    .title {
      flex: 1;
    }
 
    .done .title {
      text-decoration: line-through;
      color: #8a8a8a;
    }
 
    .date {
      font-size: 0.85em;
      color: #8a8a8a;
      white-space: nowrap;
    }
  `,
  template: `
    <label class="task" [class.done]="task().done">
      <input type="checkbox" [checked]="task().done" (change)="toggled.emit(task().id)" />
      <span class="title">{{ task().title }}</span>
      <span class="date">{{ task().createdAt | timeAgo }}</span>
    </label>
  `,
})
export class TaskItem {
  readonly task = input.required<Task>();
  readonly toggled = output<number>();
}
