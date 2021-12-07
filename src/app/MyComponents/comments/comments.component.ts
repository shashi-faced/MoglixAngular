import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  users: any;
  
  private data:any = []
  constructor(private http: HttpClient,private router:Router,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
     
    this.activeRoute.params          
    .subscribe(params => {
    this.getComments(params.postId);   // using this getComments method to take data from Api-->
  });                                 // but isko service me krne ka hai.
     
  }

  getComments(postId) {
    let resp = this.http.get("https://jsonplaceholder.typicode.com/comments");
    resp.subscribe((data) => this.users = data);
  }

}
