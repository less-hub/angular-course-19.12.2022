import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppTodoService } from '../app-todo.service';
import { TodoInterface, TodoStatusEnum } from '../todo-component/todo.component';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Output() public onSubmitForm: EventEmitter<TodoInterface> = new EventEmitter<TodoInterface>();

  public todoForm: FormGroup = this.formBuilder.group({
    title: new FormControl(''),
    body: new FormControl('')
  });

  public onSubmit(): void {
    // this.onSubmitForm.emit(
      // {
      //   title: this.todoForm.get('title')?.value,
      //   body: this.todoForm.get('body')?.value,
      //   status: TodoStatusEnum.PLANNED
      // }
    // );
    this.appTodoService.addTodo({
      title: this.todoForm.get('title')?.value,
      body: this.todoForm.get('body')?.value,
      status: TodoStatusEnum.PLANNED
    });
    this.router.navigate(['home']);
  }

  constructor(
    private formBuilder: FormBuilder,
    private appTodoService: AppTodoService,
    private router: Router
  ) {}
}
