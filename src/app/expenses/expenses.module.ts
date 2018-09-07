import { NgModule } from '@angular/core';
import { ExpensesComponent } from './expenses.component';
import { 
    MatButtonModule, MatExpansionModule, MatIconModule, MatListModule, MatRadioModule, MatToolbarModule 
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatRadioModule,
        MatToolbarModule,
        ReactiveFormsModule
    ],
    exports: [ExpensesComponent],
    declarations: [ExpensesComponent],
    providers: []
})
export class ExpenseswModule { }
