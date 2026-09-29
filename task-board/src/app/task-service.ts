import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly state = signal<Task[]>([
    {
      id: 1,
      title: 'Прочитать лекцию',
      done: true,
      createdAt: new Date(Date.now() - 3_600_000),
    },
    {
      id: 2,
      title: 'Создать проект через ng new',
      done: false,
      createdAt: new Date(),
    },
    {
      id: 3,
      title: 'Стать богатым',
      done: false,
      createdAt: new Date(),
    },
  ]);

  readonly tasks = this.state.asReadonly();

  toggle(id: number): void {
    this.state.update((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    );
  }
}
