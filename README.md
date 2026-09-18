# Первое приложение на CLI

### Как запускать

Это **терминальная задача**: приложение вы создаёте сами, с нуля.

Выполнять её нужно, используя только cmd и флаги для настройки команд.

Сделайте форк этого репозитория, склонируйте к себе на компьютер, перейдите в появившуюся локально папку и начинайте работу.

```bash
cd ~/angular-course-start-task   # или C:\dev\angular-course-start-task
```

---

## Information

Angular CLI — основной инструмент работы с Angular. Пока вы не создали проект руками
и не почувствовали, что именно генерируется, `angular.json` остаётся набором непонятных
букв. Эта задача — про мышечную память: `ng new` → `ng serve` → `ng generate` → `ng build`.

Собираем маленькое приложение «Доска задач» (Task Board): список задач, карточка задачи,
сервис с данными и пайп для относительного времени. Логика намеренно примитивная —
задача не про неё, а про инструмент.

---

## Statement

### Шаг 1. Создать проект

Создайте приложение `task-board` со следующими параметрами:

- препроцессор стилей — **SCSS**;
- роутинг — **включён**;
- SSR — **выключен**;
- тесты — **оставить** (не используйте `--skip-tests`).

Постарайтесь задать всё **флагами**, а не ответами на интерактивные вопросы.

Проверьте себя перед выполнением: добавьте `--dry-run` и посмотрите список файлов.

### Шаг 2. Запустить

```bash
cd task-board
ng serve --open --port 4300
```

Ответьте ниже:

1. Какую команду/команды использовали для создания приложения?

Ответ: ng new task-board --style=scss --routing --ssr=false

2. Какая версия пакетов ангуляра в сгенерированном package.json?

Ответ: 21 (^21.2.0, а для @angular/build и @angular/cli ^21.2.24)

3. Какой установился пакет для тестирования?

Ответ: vitest

### Шаг 3. Сгенерировать код — только через CLI

Создайте **командами `ng generate`** (руками файлы не создавать):

| Что           | Требование                                                                                                               |
| ------------- |--------------------------------------------------------------------------------------------------------------------------|
| `Task`        | Интерфейс: `id: number`, `title: string`, `done: boolean`, `createdAt: Date`. Название файла должно быть `task.model.ts` |
| `TaskService` | Сервис с массивом задач в `signal` (`readonly tasks = signal<Task[]>([]);`) и методом переключения `toggle`                   |
| `TaskList`    | Компонент, стратегия обнаружения изменений — **OnPush**                                                                  |
| `TaskItem`    | Компонент, **OnPush**, с инлайновым шаблоном и инлайновыми стилями                                                       |
| `TimeAgo`     | Пайп, превращающий `Date` в строку «5 минут назад»                                                                       |

Требования к генерации:

- `TaskItem` создаётся **одной командой** — без последующего ручного удаления
  файлов шаблона и стилей;
- `OnPush` задаётся флагом, а не дописывается руками после генерации;
- Перед каждой командой полезно прогнать её с `--dry-run`;
- Названия всех файлов должны быть в kebab-case, а всех сущностей (интерфейс, класс) в PascalCase

Выпишите команды, которые использовали для генерации каждого пункта:

Task: ng g interface task --type=model

TaskService: ng g service task-service

TaskList: ng g c task-list --change-detection=OnPush

TaskItem: ng g c task-item --change-detection=OnPush --inline-template --inline-style

TimeAgo: ng g pipe time-ago

### Шаг 4. Связать

Минимальная работоспособность:

- `TaskService` хранит список задач (3–5 штук, захардкоженных);
- `TaskList` получает список из сервиса через `readonly taskService = inject(TaskService); readonly tasks = this.taskService.tasks;` и рендерит задачи (`TaskItem`) в шаблоне
  через блок `@for (task of tasks())` с `track` по `task.id`;
- `TaskItem` принимает задачу через `readonly task = input.required<Task>();`, выводит в шаблоне свой title для идентификации и эмитит событие через `readonly toggled = output<number>();`
  при клике по чекбоксу `<input type="checkbox" [checked]="task().done" (change)="toggled.emit(task().id)">`;
- `TaskList` ловит событие `done` у `TaskItem` и отдает сервису `TaskService` `<app-task-item [task]="task" (toggled)="taskService.toggle($event)" />`
- `TimeAgo` применяется к `createdAt` в шаблоне `TaskItem`: `<span class="date">{{task.createdAt | timeAgo}}</span>`;
- `TaskList` подключён в корневом компоненте и виден в браузере (`app.html`), всю сгенерированную автоматически верстку и стили нужно удалить

Красивая вёрстка не требуется (но и не возбраняется сделать всё красиво) — работающая функциональность требуется.

### Шаг 5. Собрать

```bash
ng build
```

Ответьте:

1. Куда легла сборка и почему у файлов такие имена?

Ответ:

2. Какой размер `initial` бандла показал CLI?

Ответ:

3. Чем отличается вывод `ng build` от `ng build --configuration development`?

Ответ:

4. Что покажет `ng build --dry-run` и почему такого флага у `build` нет?

Ответ:

---

## Constraints

- Всё, что можно сгенерировать через `ng generate`, должно быть сгенерировано. Редактировать содержимое созданных файлов — можно и нужно.
- **Никаких `NgModule`.** Только standalone-компоненты.
- **Никаких `*ngIf` / `*ngFor`.** Только блоки `@if` / `@for`.

---

## Чек-лист сдачи

- [ ] `ng new` выполнен одной командой с нужными флагами, без интерактивных вопросов
- [ ] Все сущности из шага 3 созданы через `ng generate`
- [ ] У обоих компонентов `changeDetection: ChangeDetectionStrategy.OnPush`
- [ ] У `TaskItem` шаблон и стили инлайновые
- [ ] Приложение работает: список рендерится, чекбокс переключает состояние
- [ ] `ng build` проходит без ошибок и предупреждений о бюджетах
- [ ] Вы ответили на все вопросы в этом файле
- [ ] Вы сделали Pull Request в основной репозиторий и подписали его своими именем и фамилией

---

## Hint

<details>
  <summary>Подсказка 1 — какие флаги искать</summary>

У любой команды есть справка, и это самый быстрый способ:

```bash
ng new --help
ng generate component --help
```

</details>

<details>
  <summary>Подсказка 2 — что писать в сервисе</summary>

```ts
@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly state = signal<Task[]>([
    { id: 1, title: 'Прочитать лекцию', done: true, createdAt: new Date(Date.now() - 3_600_000) },
    { id: 2, title: 'Создать проект через ng new', done: false, createdAt: new Date() },
  ]);

  readonly tasks = this.state.asReadonly();

  toggle(id: number): void {
    this.state.update((tasks) => tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  }
}
```

</details>

<details>
  <summary>Подсказка 3 — Как может выглядеть компонент TaskItem</summary>

```ts
@Component({
  selector: 'app-task-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TimeAgoPipe],
  template: `
    <label>
      <input type="checkbox" [checked]="task().done" (change)="toggled.emit(task().id)" />
      {{ task().title }} — {{ task().createdAt | timeAgo }}
    </label>
  `,
  styles: `
    label {
      display: block;
    }
  `,
})
export class TaskItem {
  readonly task = input.required<Task>();
  readonly toggled = output<number>();
}
```

</details>

---

## Опционально

Будет интересно, если вы попробуете нагенерировать и с помощью плагина IDE/интерактивного режима cmd без флагов еще каких-нибудь сущностей с различными опциями и подключите к этому мини-приложению.
