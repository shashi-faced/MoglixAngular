import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

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
