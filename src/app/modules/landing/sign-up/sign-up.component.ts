import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../core/auth/auth.service";
import {TokenStorageService} from "../../../core/auth/token-storage.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AlertComponent} from "./alert/alert.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    rePassword: new FormControl()
  });

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertComponent, {
      panelClass: 'custom-modalbox'
    })

    dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
        dialogRef.close()
      }, 3000)
    })
  }

  signUp() {
    this.authService.signUp(this.form.value).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['sign-in']).then(
          () => this.openDialog()
        )}
    );
  }
}
