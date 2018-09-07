import { NgModule } from '@angular/core';
import { ExpensesComponent } from './expenses.component';
import { MatRadioModule, MatToolbarModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    imports: [
        FlexLayoutModule,
        MatRadioModule,
        MatToolbarModule
    ],
    exports: [ExpensesComponent],
    declarations: [ExpensesComponent],
    providers: []
})
export class ExpenseswModule { }
