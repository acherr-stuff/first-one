import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  isPasswordVisible: boolean = false;
  public socialIcons: Array<string> = ["facebook2", "google", "twitter", "linkedin"];

  constructor() { }

  ngOnInit(): void {
  }

  togglePassword(event: Event) {
    event.preventDefault();
    this.isPasswordVisible = !this.isPasswordVisible;
  }

}
