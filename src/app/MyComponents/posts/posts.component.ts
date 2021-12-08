import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  users: any;
  post:any = []
  

  constructor(private http: HttpClient,private router: Router,private postdata: PostService) { }

  ngOnInit() {
      this.postdata.getPost().subscribe((post) => {
        this.users = post;
          // console.log(data)

      })
      // let resp = this.http.get("https://jsonplaceholder.typicode.com/posts");
      //  resp.subscribe((data) => this.users = data);
  }

  onComments(i)
  { 
    this.router.navigate(['/comments', i]);
  }
}
