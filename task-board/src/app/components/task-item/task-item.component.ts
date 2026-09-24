import { Component, input, output } from '@angular/core';
import { Task } from '../../types/task.model';
import { TimeAgoPipe } from '../../pipes/time-ago/time-ago-pipe';
import { HighlightedTextComponent } from '../highlighted-text/highlighted-text.component';

@Component({
  imports: [TimeAgoPipe, HighlightedTextComponent],
  selector: 'app-task-item',
  styles: `
    .task {
      background: var(--surface);
      outline: 2px solid var(--border-color);
      border-radius: var(--border-radius);
      padding: 20px;
      padding-right: 60px;
      display: block;
      box-sizing: border-box;
      min-width: 300px;
      position: relative;
      width: 100%;
    }

    .task:hover {
      outline-color: var(--accent);
    }

    .task--done {
      outline-color: var(--accent);
    }

    .task--done:hover {
      outline-color: var(--accent);
    }

    .task__title {
      margin: 0;
      margin-bottom: 8px;
      font-size: 32px;
      position: relative;
      width: fit-content;
    }

    .task__title::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background: var(--primary);
      top: 50%;
      left: 0;
      transition: width 0.3s ease-out;
    }

    .task__title--done::after {
      width: 100%;
    }

    .task__checkbox {
      cursor: pointer;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: scale(2) translate(0, -50%);
      accent-color: var(--accent);
    }
  `,
  template: `
    <div class="task" [class.task--done]="task().done">
      <h3 class="task__title" [class.task__title--done]="task().done">
        <app-highlighted-text
          [text]="task().title"
          [highlightTerm]="highlightTerm() || ''"
        ></app-highlighted-text>
      </h3>
      <time [attr.datetime]="task().createdAt.toISOString()">{{ task().createdAt | timeAgo }}</time>
      <input
        class="task__checkbox"
        type="checkbox"
        [checked]="task().done"
        (change)="toggled.emit(task().id)"
      />
    </div>
  `,
})
export class TaskItemComponent {
  readonly task = input.required<Task>();
  readonly highlightTerm = input<string>();
  readonly toggled = output<Task['id']>();
}
