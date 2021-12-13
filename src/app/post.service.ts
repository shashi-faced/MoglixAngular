import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './config/urls';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  
   postUrl: string;

  // postUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  commentUrl: string = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) {
    this.postUrl = BASE_URL.POST_API_URL;
    console.log(this.postUrl)
   }

  getPost()
  {
    return this.http.get(this.postUrl);
  }
  getComment()
  {
    return this.http.get(this.commentUrl);
  }
  
}
