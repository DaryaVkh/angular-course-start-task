import { Injectable, Signal, signal } from '@angular/core';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly mockTasks = signal<Task[]>([
    {id: 1, title: 'Первое задание', done: false, createdAt: new Date(Date.now() - 20 * 60000)},
    {id: 2, title: 'Второе задание', done: true, createdAt: new Date(Date.now() - 15 * 60000)},
    {id: 3, title: 'Третье задание', done: false, createdAt: new Date(Date.now() - 3 * 60000)},
  ])

  readonly tasks = signal<Task[]>(this.mockTasks());

  toggle(id: number): void {
    this.mockTasks.update((oldTasks) => oldTasks.map(t => t.id === id ? { ...t, done: !t.done} : t));
  }
}
