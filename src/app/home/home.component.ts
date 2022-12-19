import { Component, OnInit } from '@angular/core';
import { AppTodoService } from '../app-todo.service';
import { TodoInterface, TodoStatusEnum } from '../todo-component/todo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public plannedTodos: TodoInterface[] = [];
  public doingTodos: TodoInterface[] = [];
  public doneTodos: TodoInterface[] = [];

  public ngOnInit(): void {
      this.plannedTodos = this.appTodoService.getTodos().filter(t => t.status === TodoStatusEnum.PLANNED);
      this.doingTodos = this.appTodoService.getTodos().filter(t => t.status === TodoStatusEnum.DOING);
      this.doneTodos = this.appTodoService.getTodos().filter(t => t.status === TodoStatusEnum.DONE);
  }

  public onSubmit(value: TodoInterface): void {
    console.log("Todo: ", value);
  }

  constructor (
    private appTodoService: AppTodoService
  ) {}
}
