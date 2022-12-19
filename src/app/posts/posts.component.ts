import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
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
      this.postsService
        .getPosts()
        .pipe(
          tap((response) => {
            console.log(response);
          }),
          map((response) => response.slice(1, response.length - 1))
        )
        .subscribe((response) => {
          this.posts = response;
        })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public redirectTo(post: PostInterface): void {
    this.router.navigate(['posts', post.id]);
  }

  constructor(private postsService: PostsService, private router: Router) {}
}
