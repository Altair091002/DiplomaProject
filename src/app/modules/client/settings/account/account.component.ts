import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {TokenStorageService} from "../../../../core/auth/token-storage.service";

@Component({
    selector       : 'settings-account',
    templateUrl    : './account.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsAccountComponent implements OnInit
{
  username = this.tokenStorage.getUsername();
  email = this.tokenStorage.getEmail();
    accountForm: UntypedFormGroup = this._formBuilder.group({
      name    : [this.username],
      username: [this.username],
      title   : ['Senior Frontend Developer'],
      company : ['YXZ Software'],
      about   : ['Hey! This is ' + this.username + ' husband, father and gamer.'],
      email   : [this.email, Validators.email],
      phone   : ['+7-700-505-03-10'],
      country : ['Kazakhstan'],
      language: ['Kazakh']
    });

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder,
        private tokenStorage: TokenStorageService,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
    }
}
