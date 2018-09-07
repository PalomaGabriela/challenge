import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpenseswModule } from './expenses/index';
import { NavModule } from './nav/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ExpenseswModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
