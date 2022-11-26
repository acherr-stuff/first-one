import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IconService} from "./services/icon.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'first-one';

  constructor(private iconService: IconService) {
  }

  ngOnInit() {
    this.iconService.registerIcons();
  }

}
