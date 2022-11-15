import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  panels: any[] = [];
  selectedPanel: string = 'account';

  constructor() { }

  ngOnInit(): void {
    this.panels = [
      {
        id         : 'account',
        icon       : 'account_circle',
        title      : 'Account',
        description: 'Manage your public profile and private information'
      },
      {
        id         : 'security',
        icon       : 'security',
        title      : 'Security',
        description: 'Manage your password and 2-step verification preferences'
      },
      {
        id         : 'plan-billing',
        icon       : 'credit_card',
        title      : 'Plan & Billing',
        description: 'Manage your subscription plan, payment method and billing information'
      },
      {
        id         : 'notifications',
        icon       : 'alarm_on',
        title      : 'Notifications',
        description: 'Manage when you\'ll be notified on which channels'
      },
      {
        id         : 'team',
        icon       : 'group',
        title      : 'Team',
        description: 'Manage your existing team and change roles/permissions'
      }
    ];
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
