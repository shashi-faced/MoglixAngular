import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsService } from 'src/app/comments.service';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  id:number;
  postfield: any;
  [x: string]: any;
  users: any;
  post:any = []
  userpost = []

  constructor(private http: HttpClient,private router: Router,private commentService: CommentsService,private postservice: PostService) { }

  ngOnInit() {
      this.postservice.getPost().subscribe((post) => {
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
  addPost()
  {
    if(this.postfield){
      this.commentService.addPost(this.postfield);
   this.userpost.push(this.postfield);
   console.log(this.postfield);
   this.postfield = null;

  }
}
getAllPosts() {
  return this.commentService.getAllPosts();
}

}
