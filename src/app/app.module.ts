import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { PostService } from './post-service/post.service';
import { FacebookPostComponent } from './facebook-post/facebook-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    FacebookPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
