import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { GraphicsDialogComponent } from './graphics-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule }   from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CategoryGraphicModule } from './category-graphic/category-graphic.module';
import { MonthGraphicModule } from './month-graphic/month-graphic.module';
import { MoneySourceGraphicModule } from './money-source-graphic/money-source-graphic.module';


@NgModule({
    imports: [
        CategoryGraphicModule,
        ChartsModule,
        FlexLayoutModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MonthGraphicModule,
        MoneySourceGraphicModule
    ],
    exports: [],
    declarations: [GraphicsDialogComponent],
    providers: [],
    entryComponents: [GraphicsDialogComponent]
})
export class GraphicsDialogModule { }
