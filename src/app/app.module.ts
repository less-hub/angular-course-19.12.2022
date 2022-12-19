import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppTodoService } from './app-todo.service';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo-component/todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AppTodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
