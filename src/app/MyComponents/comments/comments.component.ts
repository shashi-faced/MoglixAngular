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
  
  commentprint: any = []
  data:any = []
  commentfield: any;  //comment input field id  
  postId: number;
  commentdata: any;  //service reference

  constructor(private http: HttpClient,private router:Router,private activeRoute: ActivatedRoute,
                  private commentService : CommentsService) { }
  
  ngOnInit() {
                    
    this.activeRoute.params          
    .subscribe(params => {
      this.postId = params.postId;
    this.getComments(params.postId);   // using this getComments method to take data from Api-->
  });                                 
     
  }

  getComments(id: number) {
    return localStorage.getItem('tippadivalue');

    
  
  }
  addComments(i)
  {
    if(this.commentfield)
    {
      let commentObj = {postId: i, text: this.commentfield};
      

      this.commentService.addComment(this.postId, this.commentfield);

      
     //storing in service 
      this.commentService.commentsList(this.commentfield);
      //this.commentprint = localStorage.getItem('tippadi');
      console.log(this.commentprint);

       this.commentfield = "";
    }

  }

  getCommentList() {
    return this.commentService.getCommentList(this.postId);
  }

}
