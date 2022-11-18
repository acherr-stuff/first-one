import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  isPasswordVisible: boolean = false;
  public socialIcons: Array<string> = ["facebook", "google", "twitter", "linkedin"];
  constructor(
      private readonly matDialogRef: MatDialogRef<SignInComponent>,
  ) { }

  ngOnInit(): void {
  }

  togglePassword(event: Event) {
    event.preventDefault();
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  close() {
    this.matDialogRef.close();
  }

}
