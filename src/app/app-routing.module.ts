import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './MyComponents/comments/comments.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { PostsComponent } from './MyComponents/posts/posts.component';
import { TodosComponent } from './MyComponents/todos/todos.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'todoscomponent',
    component: TodosComponent
  },
  {
    path: 'post',
    component: PostsComponent
  },
  {
    path:'comments/:postId',
    component: CommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
