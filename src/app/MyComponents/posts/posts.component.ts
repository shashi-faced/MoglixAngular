import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  users: any;
  private data:any = []

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
      let resp = this.http.get("https://jsonplaceholder.typicode.com/posts");
       resp.subscribe((data) => this.users = data);
  }

  onComments()
  {
    this.router.navigateByUrl('/comments');
  }
}
