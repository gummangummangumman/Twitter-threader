import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetThreadComponent } from './tweet-thread.component';

describe('TweetThreadComponent', () => {
  let component: TweetThreadComponent;
  let fixture: ComponentFixture<TweetThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
