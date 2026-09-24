import { Component } from '@angular/core';
import { TaskList } from './task-list/task-list';

@Component({
  imports: [TaskList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
