import { Service, signal } from '@angular/core';
import { Task } from '../models/task.model';

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

@Service()
export class TaskService {
  readonly tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Прочитать лекцию про Angular CLI',
      done: true,
      createdAt: new Date(Date.now() - 2 * DAY),
    },
    {
      id: 2,
      title: 'Создать проект через ng new',
      done: true,
      createdAt: new Date(Date.now() - 3 * HOUR),
    },
    {
      id: 3,
      title: 'Сгенерировать сущности через ng generate',
      done: false,
      createdAt: new Date(Date.now() - 25 * MINUTE),
    },
    {
      id: 4,
      title: 'Собрать приложение через ng build',
      done: false,
      createdAt: new Date(Date.now() - 5 * MINUTE),
    },
    { id: 5, title: 'Сделать Pull Request', done: false, createdAt: new Date() },
  ]);

  toggle(id: number): void {
    this.tasks.update((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    );
  }
}
