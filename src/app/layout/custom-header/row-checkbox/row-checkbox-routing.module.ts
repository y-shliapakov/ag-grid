import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RowCheckboxComponent } from './row-checkbox.component';

const routes: Routes = [
  {
    path: '',
    component: RowCheckboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RowCheckboxRoutingModule { }
