import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

const TASKS: Task[] = [
  {
    id: 1,
    title: 'Создать проект',
    done: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'Запустить',
    done: true,
    createdAt: new Date(Date.now() - 5 * 60_000),
  },
  {
    id: 3,
    title: 'Сгенерировать код — только через CLI',
    done: true,
    createdAt: new Date(Date.now() - 15 * 60_000),
  },
  {
    id: 4,
    title: 'Связать',
    done: false,
    createdAt: new Date(Date.now() - 15 * 3_600_000),
  },
  {
    id: 5,
    title: 'Собрать',
    done: false,
    createdAt: new Date(Date.now() - 48 * 3_600_000),
  },
]

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  readonly tasks = signal<Task[]>(TASKS);

  toggle(id: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    });
  }
}
