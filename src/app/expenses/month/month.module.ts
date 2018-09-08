import { NgModule } from '@angular/core';
import { MonthComponent } from './month.component';
import { 
    MatButtonModule, MatExpansionModule, MatIconModule, MatListModule 
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MonthPipe } from './month.pipe';
import { EditMonthDialogModule } from './edit-month-dialog/index';

@NgModule({
    imports: [
        CommonModule,
        EditMonthDialogModule,
        FlexLayoutModule,
        MatButtonModule, 
        MatExpansionModule, 
        MatIconModule, 
        MatListModule 
    ],
    exports: [MonthComponent, MonthPipe],
    declarations: [MonthComponent, MonthPipe],
    providers: [],
})
export class MonthModule { }
