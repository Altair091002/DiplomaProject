import {Component, OnInit} from '@angular/core';
import {navData} from './nav-data';
import {TokenStorageService} from "../../../core/auth/token-storage.service";

@Component({
  selector: 'vertical-layout',
  templateUrl: './vertical-layout.component.html',
  styleUrls: ['./vertical-layout.component.scss']
})
export class VerticalLayoutComponent implements OnInit {
  isCompact: boolean = false;
  navigationData: any = navData;
  currentYear: number = new Date().getFullYear();
  token = this.tokenStorage.getToken();
  username: any = "Username";
  email: any = "Email@gmail.com";

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
