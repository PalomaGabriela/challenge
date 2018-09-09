import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { EditMonthDialogComponent } from './edit-month-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule }   from '@angular/forms';
import { SharedPipeModule } from '../../shared/index';

@NgModule({
    imports: [
        FlexLayoutModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        SharedPipeModule
    ],
    exports: [],
    declarations: [EditMonthDialogComponent],
    providers: [],
    entryComponents: [EditMonthDialogComponent]
})
export class EditMonthDialogModule { }
