import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service/post.service';

@Component({
  selector: 'settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.css']
})
export class SettingsBarComponent implements OnInit {
  postService:PostService;
  constructor(postService:PostService)
  {
    this.postService = postService;
  }

  ngOnInit(): void {
  }

}
