import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteFooterRoutingModule } from './site-footer-routing.module';
import { SiteFooterComponent } from './site-footer.component';


@NgModule({
  declarations: [
    SiteFooterComponent
  ],
  exports: [
    SiteFooterComponent
  ],
  imports: [
    CommonModule,
    SiteFooterRoutingModule
  ]
})
export class SiteFooterModule { }
