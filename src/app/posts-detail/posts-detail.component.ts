import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostInterface, PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss'],
})
export class PostsDetailComponent implements OnInit {
  private postId: string | null = '';
  public post!: PostInterface;

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');

    this.postsService
      .getPost(this.postId)
      .subscribe((response) => (this.post = response));
      
  }

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}
}
