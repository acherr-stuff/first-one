import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() type!: string;
  @Input() category!: string;
  @Input() image!: string;
  @Input() date!: string;
  @Input() timeToListen!: string | undefined;
  @Input() title!: string;
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
