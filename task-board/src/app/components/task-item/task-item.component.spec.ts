import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskItemComponent } from './task-item.component';
import { inputBinding } from '@angular/core';
import { Task } from '../../types/task.model';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskItemComponent, {
      bindings: [
        inputBinding(
          'task',
          () =>
            ({
              id: 1,
              done: false,
              title: '123',
              createdAt: new Date(),
            }) satisfies Task,
        ),
      ],
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
