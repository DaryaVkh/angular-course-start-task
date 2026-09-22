import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle task by id', () => {
    const [first, ...rest] = service.tasks();

    service.toggle(first.id);

    expect(service.tasks()[0].done).toBe(!first.done);
    expect(service.tasks().slice(1)).toEqual(rest);
  });
});
