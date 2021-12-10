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
    ["Shashi Verma","Amit Kumar","ICAT" ];
    this.x=this.todos.length;
    
   }

  ngOnInit() {
  }

  addTodo() {
    if (this.currentTodo) {
    this.todos.push(this.currentTodo);
    this.currentTodo = '';
    this.x = this.todos.length;
    document.getElementById("valid").innerHTML = ""
    }
    else
    {
      document.getElementById("valid").innerHTML = "Empty Field can't Store."
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
  checkboxClicked()
  {
    document.getElementById("check").innerHTML = "CheckBox Feature is not Working Now";
  }
  // unchecked()
  // {
  //   document.getElementById("check").innerHTML = "Unchecked";
  // }
}