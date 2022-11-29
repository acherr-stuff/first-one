import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SignInComponent} from "../../sign-in/sign-in.component";
import {SignUpComponent} from "../../sign-up/sign-up.component";
import {IconService} from "../../../services/icon.service";
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  personIcon = "person";

  constructor(
      public dialog: MatDialog,
      private modalService: ModalService
      ) {}

  openSignInDialog(event: Event) {
    this.modalService.openDialog(event, SignInComponent)
  }

  openSignUpDialog(event: Event) {
    this.modalService.openDialog(event, SignUpComponent)
  }

  ngOnInit(): void {
  }

}
