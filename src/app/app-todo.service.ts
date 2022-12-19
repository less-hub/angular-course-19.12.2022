import { Injectable } from '@angular/core';
import { TodoInterface, TodoStatusEnum } from './todo-component/todo.component';

@Injectable({
  providedIn: 'root'
})
export class AppTodoService {
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

  public getTodos(): TodoInterface[] {
    return this.todos;
  }
}
