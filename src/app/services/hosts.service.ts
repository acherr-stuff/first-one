import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class HostsService {

  constructor(@Inject(DOCUMENT) private document: any) { }

  getHostName(): string {
    return this.document.location.hostname;
  }
}
