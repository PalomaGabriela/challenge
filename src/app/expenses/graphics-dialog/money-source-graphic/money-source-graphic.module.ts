import { NgModule } from '@angular/core';
import { MoneySourceGraphicComponent } from './money-source-graphic.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [
        ChartsModule
    ],
    exports: [MoneySourceGraphicComponent],
    declarations: [MoneySourceGraphicComponent],
    providers: [],
})
export class MoneySourceGraphicModule { }
