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
  

  constructor(private http: HttpClient,private router: Router,private commentService: CommentsService,private postservice: PostService) { }

  ngOnInit() {}

  onComments(i)
  { 
    this.router.navigate(['/comments', i]);
  }
  addPost()
  {
    let user = localStorage.getItem('username');
    console.log("username value is "+user);
    if(this.postfield){
      this.commentService.addPost(this.postfield, user);

  //   this.userpost.push(this.postfield);
  //  console.log(this.postfield);
       this.postfield = null;

  }
}
getAllPosts() {
  return this.commentService.getAllPosts();
}

}
