import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import {FuseHighlightModule} from "../../../../components/highlight";
import {TypographyComponent} from "./typography.component";
import {SharedModule} from "../../../../shared/shared.module";

export const routes: Route[] = [
    {
        path     : '',
        component: TypographyComponent
    }
];

@NgModule({
    declarations: [
        TypographyComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatTabsModule,
        FuseHighlightModule,
        SharedModule
    ]
})
export class TypographyModule
{
}
