import { NgModule } from '@angular/core';
import { ExpensesComponent } from './expenses.component';
import { MatRadioModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FlexLayoutModule,
        MatRadioModule,
        MatToolbarModule,
        ReactiveFormsModule
    ],
    exports: [ExpensesComponent],
    declarations: [ExpensesComponent],
    providers: []
})
export class ExpenseswModule { }
