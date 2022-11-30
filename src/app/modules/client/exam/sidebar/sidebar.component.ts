import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories:any;

  constructor(private _cat: CategoryService, private _snack: MatSnackBar) { }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        this._snack.open('Error in loading categories from server', '', {
          duration: 3000,
        });
      }
    );
  }

}
