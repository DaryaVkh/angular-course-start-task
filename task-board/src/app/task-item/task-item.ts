import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {Task} from '../task.model';
import {TimeAgoPipe} from '../time-ago-pipe';

@Component({
  selector: 'app-task-item',
  imports: [TimeAgoPipe],
  template: `
    <label class="task">
      <input type="checkbox" [checked]="task().done" (change)="toggled.emit(task().id)"/>

      @if (task().done) {
        <span class="done">{{ task().title }}</span>
      } @else {
        <span>{{ task().title }}</span>
      }

      <span class="date">{{ task().createdAt | timeAgo }}</span>
    </label> `,
  styles: `
    .task {
      display: block;
      border: 1px solid #000000;
      padding: 12px;
    }

    .done {
      text-decoration: line-through;
      color: rgb(188, 0, 44);
    }

    .date {
      margin-left: 8px;
      color: #aaaaaa;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItem {
  readonly task = input.required<Task>();
  readonly toggled = output<number>();
}
