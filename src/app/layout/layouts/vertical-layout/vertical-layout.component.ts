import {Component, OnInit} from '@angular/core';
import {adminNavData, navData} from './nav-data';
import {TokenStorageService} from "../../../core/auth/token-storage.service";
import {UserService} from "../../../core/auth/user.service";

@Component({
  selector: 'vertical-layout',
  templateUrl: './vertical-layout.component.html',
  styleUrls: ['./vertical-layout.component.scss']
})
export class VerticalLayoutComponent implements OnInit {
  navigationData: any = navData;
  adminNavigation: any = adminNavData;
  isCompact: boolean = false;
  currentYear: number = new Date().getFullYear();
  token = this.tokenStorage.getToken();
  // email = this.tokenStorage.getEmail();
  // username = this.tokenStorage.getUsername();
  email = ""
  username = ""

  constructor(
    private tokenStorage: TokenStorageService,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.userService.userDetails().subscribe({
      next: (res: any) => {
        console.log(res)
        this.email = res.email;
        this.username = res.username;
      }
    })
  }

  signOut() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
