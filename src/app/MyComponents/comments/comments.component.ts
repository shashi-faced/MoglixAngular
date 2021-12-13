import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/comments.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  users: any;
  comments: any = []
  
  data:any = []
  constructor(private http: HttpClient,private router:Router,private activeRoute: ActivatedRoute,private commentData : CommentsService) { }

  ngOnInit() {
     
    this.activeRoute.params          
    .subscribe(params => {
    this.getComments(params.postId);   // using this getComments method to take data from Api-->
  });                                 
     
  }

  getComments(id: number) {
    // this.commentData.getComment().subscribe((comment) => {
    //   this.users = comment
    //    this.users = this.users.filter((comment: any) => comment.postId == id);
    // });
    
  
  }
}
