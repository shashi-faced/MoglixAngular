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

  getLastPostId () {
    return +localStorage.getItem('lpid');
  }

  addPost(text) {
    const id = this.getLastPostId() + 1;
    let post = {id: id, text: text};
    let postList = this.getAllPosts();
    postList.push(post);
    localStorage.setItem('post', JSON.stringify(postList));
    localStorage.setItem('lpid', id.toString())
  }

  getAllPosts() {
    let postList = [];
    if (localStorage.getItem('post')) {
      postList = JSON.parse(localStorage.getItem('post')) as [];
    }

    return postList;
  }

  addComment(postId, text) {
    let commentList = this.getCommentList(postId);

    commentList.push(text);
    localStorage.setItem('post-' + postId, JSON.stringify(commentList));
  }

  getCommentList(postId) {
    let commentList = [];
    if (localStorage.getItem('post-' + postId)) {
      commentList = JSON.parse(localStorage.getItem('post-' + postId)) as [];
    }

    return commentList;
  }
}
