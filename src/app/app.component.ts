import { Component, OnInit } from '@angular/core';
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
      this.plannedTodos = this.todos.filter(t => t.status === TodoStatusEnum.PLANNED);
      this.doingTodos = this.todos.filter(t => t.status === TodoStatusEnum.DOING);
      this.doneTodos = this.todos.filter(t => t.status === TodoStatusEnum.DONE);
  }

  public todos: TodoInterface[] = [
    {
      title: '[Angular]',
      body: '',
      status: TodoStatusEnum.PLANNED
    },
    {
      title: 'Todo-Title 2',
      body: 'Todo-Body',
      status: TodoStatusEnum.DOING
    },
    {
      title: 'Todo-Title 3',
      body: 'Todo-Body',
      status: TodoStatusEnum.DONE
    },
    {
      title: 'Todo-Title 4',
      body: 'Todo-Body',
      status: TodoStatusEnum.DONE
    },
    {
      title: 'Todo-Title 4',
      body: 'Todo-Body',
      status: TodoStatusEnum.DOING
    },
    {
      title: 'Todo-Title 4',
      body: 'Todo-Body',
      status: TodoStatusEnum.DOING
    },
    {
      title: 'Todo-Title 4',
      body: 'Todo-Body',
      status: TodoStatusEnum.PLANNED
    },
  ];
}
