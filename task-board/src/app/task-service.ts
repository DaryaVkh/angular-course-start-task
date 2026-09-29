import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly state = signal<Task[]>([
    { id: 1, title: 'Прочитать лекцию', done: true, createdAt: new Date(Date.now() - 3_600_000) },
    { id: 2, title: 'Создать проект через ng new', done: false, createdAt: new Date() },
    { id: 3, title: 'Полистать рилсы', done: true, createdAt: new Date(Date.now() - 86_400_000) },
    { id: 4, title: 'Полистать шортсы', done: true, createdAt: new Date(Date.now() - 600_000) },
    { id: 5, title: 'Полистать тиктоки', done: true, createdAt: new Date(Date.now() - 300_000) },
  ]);

  readonly tasks = this.state.asReadonly();

  toggle(id: number): void {
    this.state.update((tasks) => tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  }
}