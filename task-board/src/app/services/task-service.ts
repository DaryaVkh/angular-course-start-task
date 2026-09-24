import { Service, Signal, signal } from '@angular/core';
import { Task } from '../types/task.model';

@Service()
export class TaskService {
  readonly tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Прочитать лекцию',
      done: false,
      createdAt: new Date(),
    },
    {
      id: 2,
      title: 'Создать проект через ng new',
      done: false,
      createdAt: new Date(),
    },
    {
      id: 3,
      title: 'Выспаться',
      done: false,
      createdAt: new Date(),
    },
  ]);

  toggle(id: number) {
    this.tasks.update((tasks) =>
      this.tasks().map((t) => {
        if (t.id === id) {
          t.done = !t.done;
        }

        return t;
      }),
    );
  }
}
