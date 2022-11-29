import {ComponentRef, Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SignUpComponent} from "../components/sign-up/sign-up.component";
import {SignInComponent} from "../components/sign-in/sign-in.component";
import {ComponentType} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
      public dialog: MatDialog
  ) {}

  openDialog(event: Event, component: ComponentType<SignUpComponent | SignInComponent>) {
    event.preventDefault();
    const dialogRef = this.dialog.open(component);
  }

}
