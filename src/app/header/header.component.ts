import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SidenavComponent} from "../sidenav/sidenav.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  // public dialog: MatDialog
  constructor() { }

  ngOnInit(): void {
  }

  getHeaderClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768){
      styleClass = 'head-trimmed';
    }
    else {
      styleClass = 'head-md-screen'
    }
    return styleClass;
  }

  openSignInDialog() {

  }

  openSignUpDialog() {

  }
}
