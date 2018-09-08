import { NgModule } from '@angular/core';
import { MoneySourceComponent } from './money-source.component';
import { 
    MatButtonModule, MatExpansionModule, MatIconModule, MatListModule 
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { EditMoneySourceDialogModule } from './edit-money-source-dialog/index'

@NgModule({
    imports: [
        CommonModule,
        EditMoneySourceDialogModule,
        FlexLayoutModule,
        MatButtonModule, 
        MatExpansionModule, 
        MatIconModule, 
        MatListModule 
    ],
    exports: [MoneySourceComponent],
    declarations: [MoneySourceComponent],
    providers: [],
})
export class MoneySourceModule { }
