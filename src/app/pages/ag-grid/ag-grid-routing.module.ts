import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgGridComponent } from './ag-grid.component';

const routes: Routes = [
  {
    path: '',
    component: AgGridComponent
  },
  {
    redirectTo: '/',
    loadChildren: () => import('../../layout/toolbar/toolbar.module').then(m => m.ToolbarModule)
  },
  {
    redirectTo: '/',
    loadChildren: () => import('../../layout/custom-header/column-checkbox/column-checkbox.module').then(m => m.ColumnCheckboxModule)
  },
  {
    redirectTo: '/',
    loadChildren: () => import('../../layout/custom-header/row-checkbox/row-checkbox.module').then(m => m.RowCheckboxModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgGridRoutingModule { }
