import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostInterface, PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription = new Subscription();
  public posts: PostInterface[] = [];

  public ngOnInit(): void {
    this.subscriptions.add(
      this.postsService.getPosts().subscribe((response) => {
        this.posts = response;
      })
    );
  }

  public ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }

  constructor(private postsService: PostsService) {}
}
