import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/auth/auth.service";
import {TokenStorageService} from "../../../core/auth/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }


  signIn() {
    this.authService.singIn(this.form.value).subscribe(
      data => {
        console.log(data)
        this.tokenStorage.saveToken(data.token);
        console.log(this.tokenStorage.getToken());
        this.router.navigate(['home']).then(
          () => { window.location.reload(); }
        )
      }
    );
  }
}
