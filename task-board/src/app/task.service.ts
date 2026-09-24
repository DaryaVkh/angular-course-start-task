import { Service, signal } from '@angular/core';
import { Task } from './task.model';

@Service()
export class TaskService {
  private readonly state = signal<Task[]>([
      { id: 1, title: 'Поспать', done: true, createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000) },
      { id: 2, title: 'Повдуплять в JS', done: true, createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000) },
      { id: 3, title: 'Повдуплять в потолок', done: false, createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000) },
      { id: 4, title: 'Поощущать себя котёнком-поварёнком в этом вашем фронтенде', done: false, createdAt: new Date(Date.now() - 30 * 60 * 1000) },
      { id: 5, title: 'Поделать Angular', done: false, createdAt: new Date(Date.now()) },
  ]);

  readonly tasks = this.state.asReadonly();
  
  toggle(id: number): void {
    this.state.update((tasks) =>
        tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)
      )
    );
  }
}
