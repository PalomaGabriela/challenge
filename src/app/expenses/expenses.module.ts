import { NgModule } from '@angular/core';
import { ExpensesComponent } from './expenses.component';
import { 
    MatButtonModule, MatExpansionModule, MatIconModule, MatListModule, MatRadioModule, MatToolbarModule 
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MonthModule } from './month/index';
import { CategoryModule } from './category/index';

@NgModule({
    imports: [
        CategoryModule,
        CommonModule,
        FlexLayoutModule,
        HttpModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatRadioModule,
        MatToolbarModule,
        MonthModule,
        ReactiveFormsModule
    ],
    exports: [ExpensesComponent],
    declarations: [ExpensesComponent],
    providers: []
})
export class ExpensesModule { }
