import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { HomeComponent } from '../home/home.component';
import { PostsComponent } from '../posts/posts.component';

export const routes: Routes = [
  { path: 'add-todo', component: TodoFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
