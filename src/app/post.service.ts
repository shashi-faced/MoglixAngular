import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from './config/urls';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  // postUrl: string = BaseUrl.BASE_URL.POST_API_URL;

  postUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  commentUrl: string = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) { }

  getPost()
  {
    return this.http.get(this.postUrl);
  }
  getComment()
  {
    return this.http.get(this.commentUrl);
  }
  
}
