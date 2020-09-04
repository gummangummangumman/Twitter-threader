import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  showTweet = true;
  showTweetAsThread = true;
  showFacebookPost = false;

  counterAtEnd = true;

  constructor() { }
}
