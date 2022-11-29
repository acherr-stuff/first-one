import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pagesCount!: number;
  pages: number[] = [];

  constructor() {

  }

  ngOnInit(): void {
    for (let i=0; i<this.pagesCount; i++) {
      this.pages.push(i+1)
    }
    console.log("pages: ", this.pages)
  }

}
