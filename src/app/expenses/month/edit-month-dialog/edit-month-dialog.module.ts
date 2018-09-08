import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatDividerModule } from '@angular/material';
import { EditMonthDialogComponent } from './edit-month-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        FlexLayoutModule,
        MatButtonModule,
        MatDialogModule,
        MatDividerModule
    ],
    exports: [],
    declarations: [EditMonthDialogComponent],
    providers: [],
    entryComponents: [EditMonthDialogComponent]
})
export class EditMonthDialogModule { }
