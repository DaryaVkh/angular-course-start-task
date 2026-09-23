import {
  ChangeDetectionStrategy,
  Component,
  input,
  output
} from '@angular/core';
import { Task } from '../task.model';
import { TimeAgo } from '../time-ago-pipe';

@Component({
  selector: 'app-task-item',
  imports: [TimeAgo],
  template: `
  <div class="task-item">
    <div class="task-row">
      <input type="checkbox" 
        class="checker"
        [checked]="task().done" 
        (change)="toggled.emit(task().id)">
      <div class="item-title">{{ task().title }}</div>
    </div>
    <span class="date">{{task().createdAt | timeAgo}}</span>
    </div>
  `,
  styles: `
  .task-item {
    display: flex;
    padding: 16px 32px;
    border: 1px solid gray;
    border-radius: 8px;
    background-color: #f0f0f0 ;
    flex-direction: column;
    gap: 8px;
  }
  .task-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .item-title {
    font-weight: 700;
  }
  .date {
    margin-left: 30px;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItem {
  readonly task = input.required<Task>();
  readonly toggled = output<number>();
}
