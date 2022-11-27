import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IconService} from "./services/icon.service";
import {HostsService} from "./services/hosts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'first-one';

  constructor(private iconService: IconService, private hostsService: HostsService) {

  }

  ngOnInit() {
    console.log(this.hostsService.getHostName());
    this.iconService.registerIcons();
  }

}
