import { Injectable, signal } from '@angular/core';
import {Task} from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly state = signal<Task[]>([
    {
      id: 1,
      title: 'Task 1',
      done: true,
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },
    {
      id: 2,
      title: 'Task 2',
      done: false,
      createdAt: new Date(Date.now() - 5 * 60 * 1000),
    },
    {
      id: 3,
      title: 'Task 3',
      done: false,
      createdAt: new Date(),
    }
  ]);

  readonly tasks = this.state.asReadonly();

  toggle(id: number): void {
    this.state.update((tasks) => tasks.map((task) => (task.id === id
      ? { ...task, done: !task.done }
      : task)));
  }
}
