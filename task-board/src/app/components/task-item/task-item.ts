import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Task } from '../../models/task.model';
import { TimeAgoPipe } from '../../pipes/time-ago-pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TimeAgoPipe],
  selector: 'app-task-item',
  styles: `
    .task {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border: 1px solid #e3e5ea;
      border-radius: 10px;
      background: #fff;
      cursor: pointer;
    }

    .task:hover {
      border-color: #b9bfcc;
    }

    input {
      width: 18px;
      height: 18px;
      margin: 0;
      accent-color: #3b6fe0;
      cursor: pointer;
    }

    .title {
      flex: 1;
    }

    .task--done .title {
      color: #8a909c;
      text-decoration: line-through;
    }

    .date {
      color: #8a909c;
      font-size: 13px;
      white-space: nowrap;
    }
  `,
  template: `
    <label class="task" [class.task--done]="task().done">
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
