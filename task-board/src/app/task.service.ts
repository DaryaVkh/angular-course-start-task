import {Injectable, signal} from '@angular/core';
import {Task} from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly state = signal<Task[]>([
    {
      id: 1,
      title: 'Сделать заказ книги в читай городе',
      done: true,
      createdAt: new Date(Date.now() - 60 * 60000),
    },
    {
      id: 2,
      title: 'Прийти в читай город',
      done: false,
      createdAt: new Date(Date.now() - 30 * 60000),
    },
    {
      id: 3,
      title: 'Оплатить заказ в читай городе',
      done: false,
      createdAt: new Date(Date.now() - 10 * 60000),
    },
    {
      id: 4,
      title: 'Читать книгу',
      done: false,
      createdAt: new Date(),
    },
  ]);

  readonly tasks = this.state.asReadonly();

  toggle(id: number): void {
    this.state.update((tasks) =>
      tasks.map((task) => {
        return task.id !== id ? task : {...task, done: !task.done,};
      }),
    );
  }
}
