import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  readonly tasks = signal<Task[]>([]);

  toggle() {}
}
