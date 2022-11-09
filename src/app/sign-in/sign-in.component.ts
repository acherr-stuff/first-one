import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  isPasswordVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePassword(event: Event) {
    event.preventDefault();
    console.log("clicked");
    this.isPasswordVisible = !this.isPasswordVisible;
  }

}
