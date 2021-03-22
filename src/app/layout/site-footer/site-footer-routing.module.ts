import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteFooterComponent } from './site-footer.component';

const routes: Routes = [
  {
    path: '',
    component: SiteFooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteFooterRoutingModule { }
