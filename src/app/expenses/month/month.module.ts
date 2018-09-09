import { NgModule } from '@angular/core';
import { MonthComponent } from './month.component';
import { 
    MatButtonModule, MatExpansionModule, MatIconModule, MatListModule 
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { EditMonthDialogModule } from './edit-month-dialog/index';
import { SharedPipeModule } from '../shared-pipe.module';

@NgModule({
    imports: [
        CommonModule,
        EditMonthDialogModule,
        FlexLayoutModule,
        MatButtonModule, 
        MatExpansionModule, 
        MatIconModule, 
        MatListModule,
        SharedPipeModule
    ],
    exports: [MonthComponent],
    declarations: [MonthComponent],
    providers: [],
})
export class MonthModule { }
