import { Component, OnInit } from '@angular/core';
import { DecPostService } from 'src/app/services/post-imp.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private ps: DecPostService) {}

  ngOnInit(): void {
    this.ps.getPosts().subscribe((data: any) => {
      this.posts = data
    });
  }
}
