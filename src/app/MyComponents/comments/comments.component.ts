import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  users: any;
  private data:any = []
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
     let resp = this.http.get("https://jsonplaceholder.typicode.com/comments");
     resp.subscribe((data) => this.users = data);
  }

}
