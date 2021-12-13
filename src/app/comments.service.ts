import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './config/urls';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  userComments:any = [];
  commentUrl: string = BASE_URL.COMMENTS_API_URL;
  constructor(private http: HttpClient) { }


  getComment()
  {
    return this.http.get(this.commentUrl);
  }
  commentsList(CommentsText)
  {
   this.userComments.push(CommentsText);
   console.log("printing from service  "+this.userComments)
   localStorage.setItem('tippadivalue',this.userComments)
   console.log("printing value from local storage "+localStorage.getItem('tippadivalue'));
  }
}
