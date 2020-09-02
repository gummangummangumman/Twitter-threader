import { Component } from '@angular/core';
import { PostService } from "./post-service/post.service";
import { SettingsService } from './settings-service/settings.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postService:PostService;
  settingsService:SettingsService;
  title = 'Social media helper';
  constructor(postService:PostService, settingsService:SettingsService)
  {
    this.postService = postService;
    this.settingsService = settingsService;
  }
  
}
