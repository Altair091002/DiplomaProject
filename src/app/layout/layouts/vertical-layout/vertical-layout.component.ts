import {Component, OnInit} from '@angular/core';
import {navData} from './nav-data';
import {TokenStorageService} from "../../../core/auth/token-storage.service";
import {UserService} from "../../../core/auth/user.service";

@Component({
  selector: 'vertical-layout',
  templateUrl: './vertical-layout.component.html',
  styleUrls: ['./vertical-layout.component.scss']
})
export class VerticalLayoutComponent implements OnInit {
  navigationData: any = navData;
  isCompact: boolean = false;
  currentYear: number = new Date().getFullYear();
  token = this.tokenStorage.getToken();
  email: any;
  username: any;

  constructor(
    private tokenStorage: TokenStorageService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    console.log('token:', this.token)
    if (this.token != null){
      console.log(this.userService.userDetails());
    }
  }

  signOut() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
