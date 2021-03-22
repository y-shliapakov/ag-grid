import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { RowCheckboxRoutingModule } from './row-checkbox-routing.module';
import { RowCheckboxComponent } from './row-checkbox.component';


@NgModule({
  declarations: [
    RowCheckboxComponent
  ],
  imports: [
    CommonModule,
    RowCheckboxRoutingModule,
    SharedModule
  ]
})
export class RowCheckboxModule { }
