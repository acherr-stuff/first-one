import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public socialIcons: Array<string> = ["facebook", "twitter", "youtube", "telegram", "instagram", "linkedin"]
  public icons: Array<string> = ["iphone", "message", "heart"];
  public contacts = {
    phone: { href: "tel:+4055550128", label: "(405) 555-0128" },
    email: { href: "mailto: hello@createx.com", label: "hello@createx.com" },
  }

  constructor() { }

  ngOnInit(): void {
  }

}
