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
  commentdata: any;  //service reference
  constructor(private http: HttpClient,private router:Router,private activeRoute: ActivatedRoute,private commentData : CommentsService) { }

  ngOnInit() {
     
    this.activeRoute.params          
    .subscribe(params => {
    this.getComments(params.postId);   // using this getComments method to take data from Api-->
  });                                 
     
  }

  getComments(id: number) {
    return localStorage.getItem('tippadivalue');
    // this.commentData.getComment().subscribe((comment) => {
    //   this.users = comment
    //    this.users = this.users.filter((comment: any) => comment.postId == id);
    // });
  // 
  }
  addComments(i)
  {
    if(this.commentfield)
    {
     // this.comments.push(this.commentfield);
     // console.log(this.commentfield)     
      
      this.commentData.commentsList(this.commentfield);
      //this.commentprint = localStorage.getItem('tippadi');
      console.log(this.commentprint);

       this.commentfield = "";
    }

  }

}
