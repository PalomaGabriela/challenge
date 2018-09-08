import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { EditMonthDialogComponent } from './edit-month-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        FlexLayoutModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [],
    declarations: [EditMonthDialogComponent],
    providers: [],
    entryComponents: [EditMonthDialogComponent]
})
export class EditMonthDialogModule { }
