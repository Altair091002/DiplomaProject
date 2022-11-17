import { NgModule, Optional, SkipSelf } from '@angular/core';
import {AuthModule} from "./auth/auth.module";

@NgModule({
    imports: [
        AuthModule,
    ]
})
export class CoreModule
{
    constructor(
        @Optional() @SkipSelf() parentModule?: CoreModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}
