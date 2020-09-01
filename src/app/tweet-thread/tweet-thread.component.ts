import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service/post.service';

@Component({
  selector: 'tweet-thread',
  templateUrl: './tweet-thread.component.html',
  styleUrls: ['./tweet-thread.component.css']
})
export class TweetThreadComponent implements OnInit {

  postService:PostService;
  constructor(postService:PostService)
  {
    this.postService = postService;
  }

  ngOnInit(): void {
  }

}
