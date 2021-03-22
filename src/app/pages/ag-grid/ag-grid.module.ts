import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AgGridRoutingModule } from './ag-grid-routing.module';
import { AgGridComponent } from './ag-grid.component';
import { AgGridModule as AgGrid } from 'ag-grid-angular';
import { ColumnCheckboxModule } from '../../layout/custom-header/column-checkbox/column-checkbox.module';
import { RowCheckboxModule } from '../../layout/custom-header/row-checkbox/row-checkbox.module';
import { ToolbarModule } from '../../layout/toolbar/toolbar.module';
import { ApiService } from '../../_system/_services/api/api.service';
import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    AgGridComponent
  ],
  imports: [
    CommonModule,
    AgGridRoutingModule,
    AgGrid.withComponents([]),
    HttpClientModule,
    ColumnCheckboxModule,
    RowCheckboxModule,
    ToolbarModule
  ],
  providers: [
    HttpClient,
    ApiService
  ]
})
export class AgGridModule { }
