import { Component, OnInit } from '@angular/core';
import { AppTodoService } from './app-todo.service';
import { TodoInterface, TodoStatusEnum } from './todo-component/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public plannedTodos: TodoInterface[] = [];
  public doingTodos: TodoInterface[] = [];
  public doneTodos: TodoInterface[] = [];

  public ngOnInit(): void {
      this.plannedTodos = this.appTodoService.getTodos().filter(t => t.status === TodoStatusEnum.PLANNED);
      this.doingTodos = this.appTodoService.getTodos().filter(t => t.status === TodoStatusEnum.DOING);
      this.doneTodos = this.appTodoService.getTodos().filter(t => t.status === TodoStatusEnum.DONE);
  }

  constructor (
    private appTodoService: AppTodoService
  ) {}
}
