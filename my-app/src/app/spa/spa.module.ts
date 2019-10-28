import { NgModule } from  '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { SpaFooterComponent } from './spa-footer/spa-footer.component';
import { SpaContentComponent } from './spa-content/spa-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SpaBodyComponent, SpaHeaderComponent, SpaFooterComponent, SpaContentComponent],
  exports: [SpaBodyComponent],
})

export class SpaModule {
  
}