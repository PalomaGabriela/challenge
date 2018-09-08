import { NgModule } from '@angular/core';
import { MonthComponent } from './month.component';
import { 
    MatButtonModule, MatExpansionModule, MatIconModule, MatListModule 
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MonthPipe } from './month.pipe'

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule, 
        MatExpansionModule, 
        MatIconModule, 
        MatListModule 
    ],
    exports: [MonthComponent],
    declarations: [MonthComponent, MonthPipe],
    providers: [],
})
export class MonthModule { }
