import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Task } from '../task.model';
import { TimeAgoPipe } from '../pipes/time-ago-pipe';

@Component({
  selector: 'app-task-item',
  imports: [TimeAgoPipe],
  template: `
    <div class="task">
      <input type="checkbox" [checked]="task().done" (change)="toggled.emit(task().id)">
      <p>{{ task().title }}</p>
      <span class="date">{{task().createdAt | timeAgo}}</span>
    </div>
  `,
  styles: `
  .task {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
  }

  .date {
    padding-left: 10px;
    font-size: 10px;
    color: grey;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItem {
  readonly task = input.required<Task>();

  readonly toggled = output<number>();
}
