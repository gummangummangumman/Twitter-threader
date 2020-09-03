import { Component, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'tweet-thread',
  templateUrl: './tweet-thread.component.html',
  styleUrls: ['./tweet-thread.component.css']
})
export class TweetThreadComponent implements OnInit {

  @Input() counterAtEnd;
  @Input() post:string;
  maxNumberOfCharacters:number = 280;
  tweetPosts:string[];
  
  doubleDigitCounterMax:string = "(99/99) ";
  tripleDigitCounterMax:string = "(999/999) ";

  constructor()
  {
    this.tweetPosts = [""];
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges)
  {
    this.tweetPosts = []; //reset

    if(this.counterAtEnd)
      this.counterAtEnd = (this.counterAtEnd === true || this.counterAtEnd != "false"); //convert string to boolean

    let text = this.filterUnnecessaryWhiteSpace(this.post);
    let counter = 1;
    let maxCounterText = this.doubleDigitCounterMax;
    if(text.length > 271000)
      maxCounterText = this.tripleDigitCounterMax;
    let counterMax = Math.ceil(text.length / (this.maxNumberOfCharacters - maxCounterText.length)); //TODO inkludér counterText
    while (text !== "")
    {
      let counterText = this.counterText(counter, counterMax);
      let postWithCounter = this.first(text, this.maxNumberOfCharacters - maxCounterText.length);
      if (this.counterAtEnd)
        postWithCounter = postWithCounter + " " + counterText;
      else
        postWithCounter = counterText + " " + postWithCounter;
      
      this.tweetPosts.push(postWithCounter);      
      text = this.rest(text, this.maxNumberOfCharacters - maxCounterText.length);
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

  // replaces all newlines and double spaces with single space
  filterUnnecessaryWhiteSpace(text:string)
  {
    return text.replace(/\n+|\s\s+/g, ' ');
  }

  //returns a counter as text.
  //for instance, 1 and 20 would return "(1/20)"
  counterText(counter:number, of:number)
  {
    return ("(" + counter + "/" + of + ")");
  }

}
