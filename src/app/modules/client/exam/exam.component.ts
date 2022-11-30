import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  panels: any[] = [];
  selectedPanel: string = 'account';

  constructor() { }

  ngOnInit(): void {

  }

  goToPanel(panel: string): void
  {
    this.selectedPanel = panel;
  }

  getPanelInfo(id: string): any
  {
    return this.panels.find(panel => panel.id === id);
  }

  trackByFn(index: number, item: any): any
  {
    return item.id || index;
  }

}
