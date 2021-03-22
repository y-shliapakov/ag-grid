import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColumnCheckboxComponent } from './column-checkbox.component';

const routes: Routes = [
  {
    path: '',
    component: ColumnCheckboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColumnCheckboxRoutingModule { }
