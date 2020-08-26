import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service/post.service';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  postService:PostService;

  constructor(postService:PostService) {
    this.postService = postService;
  }

  ngOnInit(): void {
  }

}
