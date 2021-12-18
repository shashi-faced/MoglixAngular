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
  commentfield: any;  //comment input field id  
  postId: number;
  userID:string;
  com:any[];


  constructor(private http: HttpClient,private router:Router,private activeRoute: ActivatedRoute,
                  private commentService : CommentsService) { 
                    this.userID = localStorage.getItem('username');
                 
                  }
  
  ngOnInit() {
                    
    this.activeRoute.params          
    .subscribe(params => {
      this.postId = params.postId;
    this.getComments(params.postId);   // using this getComments method to take data from >
  });                                 
     
  }

  getComments(id: number) {
    return localStorage.getItem('tippadivalue');

  
  }
  addComments(i)
  {

    if(this.commentfield)
    {
       this.com =[
        {commentText:this.commentfield,userid:this.userID}];
         
        localStorage.setItem('UC',JSON.stringify(this.com)); //stored com array in local stoarge 
        this.commentService.addComment(this.postId, this.commentfield );
       
     //storing in service 
      this.commentService.commentsList(this.commentfield,this.userID);
      //this.commentprint = localStorage.getItem('tippadi');
      //console.log(this.commentprint);

       this.commentfield = "";
    }

  }

  getCommentList() {
    return this.commentService.getCommentList(this.postId);
  }
}
