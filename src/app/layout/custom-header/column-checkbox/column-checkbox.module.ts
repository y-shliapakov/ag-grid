import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { ColumnCheckboxRoutingModule } from './column-checkbox-routing.module';
import { ColumnCheckboxComponent } from './column-checkbox.component';


@NgModule({
  declarations: [
    ColumnCheckboxComponent
  ],
  imports: [
    CommonModule,
    ColumnCheckboxRoutingModule,
    SharedModule
  ]
})
export class ColumnCheckboxModule { }
