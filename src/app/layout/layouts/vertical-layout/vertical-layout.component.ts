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
  email = this.tokenStorage.getEmail();
  username = this.tokenStorage.getUsername();

  constructor(
    private tokenStorage: TokenStorageService,
  ) {
  }

  ngOnInit(): void {

  }

  signOut() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
