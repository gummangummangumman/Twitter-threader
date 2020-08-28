import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service/post.service';

@Component({
  selector: 'facebook-post',
  templateUrl: './facebook-post.component.html',
  styleUrls: ['./facebook-post.component.css']
})
export class FacebookPostComponent implements OnInit {

  postService:PostService;

  constructor(postService:PostService)
  {
    this.postService = postService;
  }

  ngOnInit(): void {
  }

}
