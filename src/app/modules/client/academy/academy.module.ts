import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import {AcademyDetailsComponent} from "./details/details.component";
import {AcademyListComponent} from "./list/list.component";
import {academyRoutes} from "./academy.routing";
import {SharedModule} from "../../../shared/shared.module";
import {AcademyComponent} from "./academy.component";
import {FuseFindByKeyPipeModule} from "../../../components/pipes/find-by-key";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [
        AcademyComponent,
        AcademyDetailsComponent,
        AcademyListComponent
    ],
  imports: [
    RouterModule.forChild(academyRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTooltipModule,
    FuseFindByKeyPipeModule,
    SharedModule,
    MatTabsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AcademyModule
{
}
