import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  readonly tasks = signal<Task[]>([
    {
      id: 0,
      title: 'Доделать подарок Жене',
      done: false,
      createdAt: new Date(2026, 8, 14),
    },
    {
      id: 1,
      title: 'Сделать домашнее задание по Angular',
      done: false,
      createdAt: new Date(2026, 8, 16),
    },
    {
      id: 2,
      title: 'Сделать домашнее задание по Node.js',
      done: false,
      createdAt: new Date(2026, 8, 21),
    },
    {
      id: 3,
      title: 'Захватить мир',
      done: true,
      createdAt: new Date(2005, 7, 16),
    },
    {
      id: 4,
      title: 'Приготовить обед на четверг',
      done: false,
      createdAt: new Date(2026, 8, 23),
    },
    {
      id: 5,
      title: 'Написать список вещей для поездки в Уфу',
      done: true,
      createdAt: new Date(),
    },
  ]);

  toggle(id: number): void {
    this.tasks.update(
      (tasks) => tasks.map((task) => (task.id === id
        ? { ...task, done: !task.done }
        : task))
    );
  }
}
