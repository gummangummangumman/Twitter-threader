import { Component, OnInit, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  maxNumberOfCharacters = 280;
  @Input() post: string;
  clipboard:Clipboard;

  constructor(clipboard: Clipboard)
  {
    this.clipboard = clipboard;
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

  copyToClipboard()
  {
    this.clipboard.copy(this.post);
  }

  ngOnInit(): void {
  }

}
