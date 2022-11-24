import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../core/auth/user.service";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  changeStudentStatus() {
    this.userService.changeStatus();
  }
}
