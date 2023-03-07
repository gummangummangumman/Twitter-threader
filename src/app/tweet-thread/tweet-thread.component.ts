import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tweet-thread',
    templateUrl: './tweet-thread.component.html',
    styleUrls: ['./tweet-thread.component.css'],
})
export class TweetThreadComponent implements OnInit {
    @Input() counterAtEnd;
    @Input() post: string;
    maxNumberOfCharacters: number = 280;
    tweetPosts: string[];
    counters: string[];

    doubleDigitCounterMax: string = '(99/99) ';
    tripleDigitCounterMax: string = '(999/999) ';

    constructor() {
        this.tweetPosts = [];
    }

    ngOnInit(): void {}

    ngOnChanges() {
        this.tweetPosts = []; //reset

        if (this.counterAtEnd)
            this.counterAtEnd =
                this.counterAtEnd === true || this.counterAtEnd != 'false'; //convert string to boolean

        let text = this.filterUnnecessaryWhiteSpace(this.post);
        let counter = 1;
        const maxCounterText =
            text.length > 271000
                ? this.tripleDigitCounterMax
                : this.doubleDigitCounterMax;
        const counterMax = Math.ceil(
            text.length / (this.maxNumberOfCharacters - maxCounterText.length),
        );
        while (text !== '') {
            let sizeOfMessage =
                this.maxNumberOfCharacters - maxCounterText.length;
            let postWithCounter = this.first(text, sizeOfMessage);
            if (postWithCounter.length < text.length) {
                //if there is more after
                let cutOffIndex = postWithCounter.lastIndexOf(' ') + 1;
                if (cutOffIndex < 30) cutOffIndex = sizeOfMessage;
                postWithCounter = postWithCounter.substring(0, cutOffIndex);
                sizeOfMessage = cutOffIndex;
            }

            this.tweetPosts.push(postWithCounter);
            text = this.rest(text, sizeOfMessage);
            counter++;
        }
        this.tweetPosts = this.tweetPosts.map((post, index) => {
            const counter = this.counterText(index + 1, this.tweetPosts.length);
            if (this.counterAtEnd) {
                return `${post} ${counter}`;
            } else {
                return `${counter} ${post}`;
            }
        });
    }

    //returns the first i characters of a string
    first(text: string, i: number = this.maxNumberOfCharacters) {
        return text.slice(0, i);
    }

    //returns the characters from i to the end of a string
    rest(text: string, i: number = this.maxNumberOfCharacters) {
        return text.slice(i);
    }

    // replaces all newlines and double spaces with single space
    filterUnnecessaryWhiteSpace(text: string) {
        return text.replace(/\n+|\s\s+/g, ' ');
    }

    //returns a counter as text.
    //for instance, 1 and 20 would return "(1/20)"
    counterText(counter: number, of: number) {
        return '(' + counter + '/' + of + ')';
    }
}
