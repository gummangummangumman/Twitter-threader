import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { PostService } from '../post-service/post.service';

@Component({
  selector: 'tweet-thread',
  templateUrl: './tweet-thread.component.html',
  styleUrls: ['./tweet-thread.component.css']
})
export class TweetThreadComponent implements OnInit {

  @Input() post:string;
  maxNumberOfCharacters:number = 280;
  tweetPosts:string[];
  postService:PostService;

  constructor(postService:PostService)
  {
    this.postService = postService;
    this.tweetPosts = [""];
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges)
  {
    let text = this.post;
    this.tweetPosts = [];
    while (text !== "")
    {
      this.tweetPosts.push(this.first(text));
      text = this.rest(text);
    }
    console.log(this.tweetPosts);
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

}
