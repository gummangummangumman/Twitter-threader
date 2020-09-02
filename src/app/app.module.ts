import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { PostService } from './post-service/post.service';
import { FacebookPostComponent } from './facebook-post/facebook-post.component';
import { SettingsBarComponent } from './settings-bar/settings-bar.component';
import { RouterModule } from '@angular/router';
import { TweetThreadComponent } from './tweet-thread/tweet-thread.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    FacebookPostComponent,
    SettingsBarComponent,
    TweetThreadComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
