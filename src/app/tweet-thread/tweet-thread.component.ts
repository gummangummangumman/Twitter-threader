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
    let counter = 1;
    let counterMax = Math.ceil(text.length / this.maxNumberOfCharacters); //TODO inkludér counterText
    while (text !== "")
    {
      let counterText = this.counterText(counter, counterMax);
      let postWithCounter = counterText + this.first(text, this.maxNumberOfCharacters - counterText.length);
      this.tweetPosts.push(postWithCounter);
      text = this.rest(text, this.maxNumberOfCharacters - counterText.length);
      counter++;
    }
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

  //returns a counter as text, including the space at the end.
  //for instance, 1 and 20 would return "1/20 "
  counterText(counter:number, of:number)
  {
    return (counter + "/" + of + " ");
  }

}
