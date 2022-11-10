import {AfterViewInit, Component, OnInit} from '@angular/core';
import { navData } from './nav-data';

@Component({
  selector: 'vertical-layout',
  templateUrl: './vertical-layout.component.html',
  styleUrls: ['./vertical-layout.component.scss']
})
export class VerticalLayoutComponent implements OnInit, AfterViewInit {
  isCompact: boolean = false;
  navigationData: any = navData;
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
