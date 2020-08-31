import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  text = "";
  showTweet = true;
  showTweetAsThread = false;
  showFacebookPost = true;

  constructor() {
  }
}
