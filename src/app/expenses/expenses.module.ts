import { NgModule } from '@angular/core';
import { ExpensesComponent } from './expenses.component';
import {
    MatButtonModule, MatExpansionModule, MatIconModule, MatListModule, MatProgressBarModule,
    MatRadioModule, MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MonthModule } from './month/index';
import { CategoryModule } from './category/index';
import { MoneySourceModule } from './money-source/index';
import { GraphicsDialogModule } from './graphics-dialog/index'

@NgModule({
    imports: [
        CategoryModule,
        CommonModule,
        FlexLayoutModule,
        GraphicsDialogModule,
        HttpModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatRadioModule,
        MatToolbarModule,
        MonthModule,
        MoneySourceModule,
        ReactiveFormsModule
    ],
    exports: [ExpensesComponent],
    declarations: [ExpensesComponent],
    providers: []
})
export class ExpensesModule { }
