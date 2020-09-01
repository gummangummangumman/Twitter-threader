import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post-service/post.service';

@Component({
  selector: 'settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.css']
})
export class SettingsBarComponent implements OnInit {

  class="hidden";
  postService:PostService;
  constructor(postService:PostService, private route: ActivatedRoute)
  {
    this.postService = postService;
  }

  ngOnInit(): void
  {
    this.route.queryParams.forEach(p => {
      if (p.hidetweet === "true")
        this.postService.showTweet = false;
      if (p.hidefb === "true")
        this.postService.showFacebookPost = false;
      if (p.settings === "true")
        this.class = "";
    });
  }

}
