import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostPayload} from "../models/PostPayload";
import {TopicService} from "../services/topic.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {DashboardDialogComponent} from "./dashboard-dialog/dashboard-dialog.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  topics:any [] = [];
  dataSource !: MatTableDataSource<any>;
  displayedColumns: string[] = [ 'title', 'content', 'author', 'createdOn', 'action'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog: MatDialog, private topicService: TopicService) {
  }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DashboardDialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save'){
        this.getAllTopics();
      }
    });
  }

  getAllTopics() {
    this.topicService.getAllPosts().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error: (err) => {
        alert('Error while fetching the Records!!!');
      }
    })
  }
  editTopics(any:any){}
  deleteTopics(any:any){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
