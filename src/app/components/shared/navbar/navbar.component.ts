import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SignInComponent} from "../../sign-in/sign-in.component";
import {SignUpComponent} from "../../sign-up/sign-up.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openSignInDialog(event: Event) {
    event.preventDefault();
    console.log("dialogOpened");
    const dialogRef = this.dialog.open(SignInComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSignUpDialog(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(SignUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
