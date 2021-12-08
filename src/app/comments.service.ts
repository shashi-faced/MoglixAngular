import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  commentUrl: string = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) { }

  getComment()
  {
    return this.http.get(this.commentUrl);
  }
}
