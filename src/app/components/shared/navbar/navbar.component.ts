import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SignInComponent} from "../../sign-in/sign-in.component";
import {SignUpComponent} from "../../sign-up/sign-up.component";
import {IconService} from "../../../services/icon.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  personIcon = "person";

  constructor(public dialog: MatDialog) {}

  openSignInDialog(event: Event) {
    event.preventDefault();
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
