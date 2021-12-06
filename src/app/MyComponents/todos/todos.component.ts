import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [];
  i: number;
  x: number;
  isEdit = false;
  index: number;

  currentTodo: string;

  constructor(private route:Router) {

    this.todos = 
    [ ];
    this.x=this.todos.length;
    
   }

  ngOnInit() {
  }

  addTodo() {
    if (this.currentTodo) {
    this.todos.push(this.currentTodo);
    this.currentTodo = '';
    this.x=this.todos.length;
    }
  }

  editTodo(i) {
    this.index = i;
    this.isEdit = true;
    this.currentTodo = this.todos[i];
  }

  updateTodo() {
    if (this.currentTodo) {
    this.todos[this.index] = this.currentTodo;
    this.currentTodo = '';
    this.isEdit = false;
    
    }
  }

  deleteTodo(index) {
    const td = this.todos.splice(index, 1);
    alert('we are deleting this - ' + td);
    this.x = this.todos.length;
  }
  postcomment()
  {
    this.route.navigateByUrl('/post')
  }
}