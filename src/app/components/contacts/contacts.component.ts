import { Component, OnInit } from '@angular/core';

declare var ymaps:any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public contacts = {
    phone: { href: "tel:+4055550128", label: "(405) 555-0128" },
    email: { href: "mailto: hello@createx.com", label: "hello@createx.com" },
    address: "2464 Royal Ln. Mesa, New Jersey 45463, USA"
  }

  public icons = {
    chat: "chat",
    iphone: "iphone",
    pin: "pin"
  }


  public map: any;
  public socialIcons: Array<string> = ["facebook", "twitter", "youtube", "telegram", "instagram", "linkedin"]
  constructor() { }

  ngOnInit(): void {
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [50.450100, 30.523400],
        zoom: 12
      });
    });
  }
}
