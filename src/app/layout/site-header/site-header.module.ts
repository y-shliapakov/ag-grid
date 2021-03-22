import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteHeaderRoutingModule } from './site-header-routing.module';
import { SiteHeaderComponent } from './site-header.component';


@NgModule({
  declarations: [
    SiteHeaderComponent
  ],
  exports: [
    SiteHeaderComponent
  ],
  imports: [
    CommonModule,
    SiteHeaderRoutingModule
  ]
})
export class SiteHeaderModule { }
