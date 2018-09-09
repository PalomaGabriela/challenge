import { NgModule } from '@angular/core';
import { MonthPipe } from './month.pipe';


@NgModule({
    exports: [MonthPipe],
    declarations: [MonthPipe],
})
export class SharedPipeModule { }
