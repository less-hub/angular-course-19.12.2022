import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  public todoForm: FormGroup = this.formBuilder.group({
    title: new FormControl(''),
    body: new FormControl('')
  });

  public onSubmit(): void {
    // this.todoForm.get('title')?.value;
    // this.todoForm.get('body')?.value;
    console.log("title: ", this.todoForm.get('title')?.value);
    console.log("body: ", this.todoForm.get('body')?.value);
  }

  constructor(
    private formBuilder: FormBuilder
  ) {}
}
