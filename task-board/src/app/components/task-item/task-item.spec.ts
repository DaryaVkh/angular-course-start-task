import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task } from '../../models/task.model';
import { TaskItem } from './task-item';

describe('TaskItem', () => {
  const task: Task = { id: 7, title: 'Тестовая задача', done: false, createdAt: new Date() };

  let component: TaskItem;
  let fixture: ComponentFixture<TaskItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskItem],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('task', task);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    expect((fixture.nativeElement as HTMLElement).textContent).toContain(task.title);
  });

  it('should emit task id on checkbox change', () => {
    const emitted: number[] = [];
    component.toggled.subscribe((id) => emitted.push(id));

    (fixture.nativeElement as HTMLElement)
      .querySelector('input[type="checkbox"]')!
      .dispatchEvent(new Event('change'));

    expect(emitted).toEqual([task.id]);
  });
});
