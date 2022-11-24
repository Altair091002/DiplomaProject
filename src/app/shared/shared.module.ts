import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JwtResponse} from "../core/auth/interfaces/jwt-response";
import {userResponse} from "../core/auth/interfaces/user-response";

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CommonModule,
    ]
})
export class SharedModule
{
  userDetails?: userResponse;
}
