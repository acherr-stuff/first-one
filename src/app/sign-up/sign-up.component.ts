import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isPasswordVisible: boolean = false;
  isConfirmVisible: boolean = false;
  public socialIcons: Array<string> = ["facebook2", "google", "twitter", "linkedin"];


  constructor() { }

  ngOnInit(): void {
  }

  togglePassword(event: Event) {
    event.preventDefault();
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirm(event: Event) {
    event.preventDefault();
    this.isConfirmVisible = !this.isConfirmVisible;
  }
}
