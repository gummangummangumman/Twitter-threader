import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service/post.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  postService:PostService;
  maxNumberOfCharacters = 280;

  constructor(postService:PostService) {
    this.postService = postService;
  }

  //returns the first i characters of a string
  first(text:string, i:number = this.maxNumberOfCharacters)
  {
    return text.slice(0, i);
  }

  //returns the characters from i to the end of a string
  rest(text:string, i:number = this.maxNumberOfCharacters)
  {
    return text.slice(i);
  }

  ngOnInit(): void {
  }

}
