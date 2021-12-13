import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './MyComponents/login/login.component';
import { PostsComponent } from './MyComponents/posts/posts.component';
import { CommentsComponent } from './MyComponents/comments/comments.component';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    PostsComponent,
    CommentsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
