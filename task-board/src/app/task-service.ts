import {Injectable, signal} from '@angular/core';
import {Task} from './task.model';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  readonly tasks = signal<Task[]>([
    {id: 1, title: 'Первый', done: true, createdAt: new Date(Date.now() - 3_600_000)},
    {id: 2, title: 'Второй', done: false, createdAt: new Date(Date.now() - 1_800_000)},
    {id: 3, title: 'Третий', done: false, createdAt: new Date(Date.now() - 900_000)}
  ]);

  toggle(id: number): void {
    this.tasks.update((tasks) =>
      tasks.map((task) => (task.id === id ? {...task, done: !task.done} : task))
    );
  }
}
