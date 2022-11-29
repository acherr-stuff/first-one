import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../../model/blog';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss'],
})
export class BlogContentComponent implements OnInit {
  @Input() posts!: Post[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.posts.length);
  }
}
