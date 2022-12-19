import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PostInterface {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly url: string = 'https://jsonplaceholder.typicode.com/posts';

  public getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.url);
  }

  constructor(
    private http: HttpClient
  ) { }
}
