import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  maxNumberOfCharacters = 280;
  @Input() post: string;

  constructor() {}

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
