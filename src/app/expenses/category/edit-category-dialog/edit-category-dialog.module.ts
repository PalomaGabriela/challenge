import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { EditCategoryDialogComponent } from './edit-category-dialog.component';
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
    declarations: [EditCategoryDialogComponent],
    providers: [],
    entryComponents: [EditCategoryDialogComponent]
})
export class EditCategoryDialogModule { }
