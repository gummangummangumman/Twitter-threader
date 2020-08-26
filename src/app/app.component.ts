import { Component } from '@angular/core';
import { PostService } from "./post-service/post.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postService:PostService;
  title = 'Social media helper';
  constructor(postService:PostService)
  {
    this.postService = postService;
  }
}
