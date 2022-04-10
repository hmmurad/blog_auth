import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class DecPostService {
  constructor(private httpClient: HttpClient) {}

  getPosts() {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts`)
  }
}
