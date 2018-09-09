import { NgModule } from '@angular/core';
import { MonthGraphicComponent } from './month-graphic.component';
import { ChartsModule } from 'ng2-charts';
import { SharedPipeModule } from '../../shared/index';

@NgModule({
    imports: [
        ChartsModule,
        SharedPipeModule
    ],
    exports: [MonthGraphicComponent],
    declarations: [MonthGraphicComponent],
    providers: [],
})
export class MonthGraphicModule { }
