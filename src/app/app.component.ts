import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IconService} from "./services/icon.service";
import {HostsService} from "./services/hosts.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private iconService: IconService, private hostsService: HostsService, private http: HttpClient) {

  }

  ngOnInit() {
    ///this.http.get('https://angdev.ru/doc/angular-http-interceptor/').subscribe();
    console.log(this.hostsService.getHostName());
    this.iconService.registerIcons();
  }

}
