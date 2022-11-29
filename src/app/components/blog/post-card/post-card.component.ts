import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../model/blog";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements OnInit {
  //
  // @Input() type!: string;
  // @Input() category!: string;
  // @Input() image!: string;
  // @Input() date!: string;
  // @Input() timeToListen!: string | undefined;
  // @Input() title!: string;
  // @Input() text!: string;

  @Input() post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
