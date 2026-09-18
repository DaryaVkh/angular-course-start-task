import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  template: ` <p>task-item works!</p> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItem {}
