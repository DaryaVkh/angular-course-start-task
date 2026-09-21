import {Injectable, signal} from '@angular/core';
import {Task} from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  readonly tasks = signal<Task[]>([
    {id: 1, title: "1 задача", done: false, createdAt: new Date(Date.now() - 3_600_000)},
    {id: 2, title: "2 задача", done: true, createdAt: new Date(Date.now() - 1_800_000)},
    {id: 3, title: '3 задача', done: false, createdAt: new Date()},
  ]);

  toggle(id: number) {
    this.tasks.update(prev =>
      prev.map(t => (t.id === id ? {...t, done: !t.done} : t))
    );
  }
}
