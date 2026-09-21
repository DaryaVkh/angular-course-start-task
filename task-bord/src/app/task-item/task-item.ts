import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {Task} from '../task.model';
import {TimeAgoPipe} from '../time-ago-pipe';

@Component({
  selector: 'app-task-item',
  imports: [
    TimeAgoPipe
  ],
  template: `
    <span class="date">{{task().title}}: {{ task().createdAt | timeAgo }}
      <input type="checkbox" [checked]="task().done" (change)="toggled.emit(task().id)">
    </span> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItem {
  readonly task = input.required<Task>();
  readonly toggled = output<number>();
}
