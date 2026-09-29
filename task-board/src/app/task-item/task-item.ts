import { Component, input, output } from '@angular/core';
import { Task } from '../task.model';
import { TimeAgoPipe } from '../time-ago-pipe';

@Component({
  imports: [TimeAgoPipe],
  selector: 'app-task-item',
  template: `
    <label>
      <input 
        type="checkbox" 
        [checked]="task().done" 
        (change)="toggled.emit(task().id)" 
      />
      {{ task().title }} — <span class="date">{{ task().createdAt | timeAgo }}</span>
    </label>
  `,
  styles: `
    label {
      display: block;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
    }
    
    label:hover {
      background-color: #f5f5f5;
    }
    
    .date {
      color: #888;
      font-size: 0.9em;
    }
  `
})

export class TaskItem {
  readonly task = input.required<Task>();
  readonly toggled = output<number>();
}
