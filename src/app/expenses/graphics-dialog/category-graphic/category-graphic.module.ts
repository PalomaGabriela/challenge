import { NgModule } from '@angular/core';
import { CategoryGraphicComponent } from './category-graphic.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [
        ChartsModule
    ],
    exports: [CategoryGraphicComponent],
    declarations: [CategoryGraphicComponent],
    providers: [],
})
export class CategoryGraphicModule { }
