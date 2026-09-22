import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskList } from './task-list';

describe('TaskList', () => {
  let component: TaskList;
  let fixture: ComponentFixture<TaskList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskList],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a task item for every task', () => {
    const items = (fixture.nativeElement as HTMLElement).querySelectorAll('app-task-item');
    expect(items.length).toBe(component.tasks().length);
  });

  it('should toggle task on checkbox change', async () => {
    const wasDone = component.tasks()[0].done;
    const checkbox = (fixture.nativeElement as HTMLElement).querySelector<HTMLInputElement>(
      'input[type="checkbox"]',
    )!;

    checkbox.dispatchEvent(new Event('change'));
    await fixture.whenStable();

    expect(component.tasks()[0].done).toBe(!wasDone);
    expect(checkbox.checked).toBe(!wasDone);
  });
});
