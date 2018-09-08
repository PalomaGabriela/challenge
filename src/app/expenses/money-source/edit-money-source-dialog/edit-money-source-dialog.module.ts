import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { EditMoneySourceDialogComponent } from './edit-money-source-dialog.component';
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
    declarations: [EditMoneySourceDialogComponent],
    providers: [],
    entryComponents: [EditMoneySourceDialogComponent]
})
export class EditMoneySourceDialogModule { }
