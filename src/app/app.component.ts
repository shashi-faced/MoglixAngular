import { Component } from '@angular/core';
import { CommentsService } from './comments.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytodos';
  username:string;
  constructor(private commentService: CommentsService) 
  {  
  }


}

