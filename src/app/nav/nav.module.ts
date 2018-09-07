import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent],
  providers: []
})
export class NavModule { }
