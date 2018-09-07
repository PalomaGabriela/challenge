import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    MatToolbarModule
  ],
  providers: [],
  exports: [NavComponent],
  bootstrap: [NavComponent]
})
export class NavModule { }
