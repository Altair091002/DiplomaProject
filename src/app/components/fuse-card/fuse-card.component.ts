import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
// import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {FuseCardFace} from "./fuse-card.types";
@Component({
  selector: 'fuse-card',
  templateUrl: './fuse-card.component.html',
  styleUrls: ['./fuse-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs     : 'fuseCard'
})
export class FuseCardComponent implements OnChanges {
  /* eslint-disable @typescript-eslint/naming-convention */
  // static ngAcceptInputType_expanded: BooleanInput;
  // static ngAcceptInputType_flippable: BooleanInput;
  /* eslint-enable @typescript-eslint/naming-convention */

  @Input() expanded: boolean = false;
  @Input() face: FuseCardFace = 'front';
  @Input() flippable: boolean = false;

  /**
   * Constructor
   */
  constructor()
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Host binding for component classes
   */
  @HostBinding('class') get classList(): any
  {
    /* eslint-disable @typescript-eslint/naming-convention */
    return {
      'fuse-card-expanded'  : this.expanded,
      'fuse-card-face-back' : this.flippable && this.face === 'back',
      'fuse-card-face-front': this.flippable && this.face === 'front',
      'fuse-card-flippable' : this.flippable
    };
    /* eslint-enable @typescript-eslint/naming-convention */
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On changes
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void
  {
    // Expanded
    if ( 'expanded' in changes )
    {
      // Coerce the value to a boolean
      // this.expanded = coerceBooleanProperty(changes.expanded.currentValue);
    }

    // Flippable
    if ( 'flippable' in changes )
    {
      // Coerce the value to a boolean
      // this.flippable = coerceBooleanProperty(changes.flippable.currentValue);
    }
  }

}
