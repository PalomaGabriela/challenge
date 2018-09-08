import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Category } from '../../index';

@Component({
    selector: 'challenge-edit-category-dialog',
    templateUrl: 'edit-category-dialog.component.html',
    styleUrls: ['edit-category-dialog.component.css']
})

export class EditCategoryDialogComponent implements OnInit {

    category: Category;
    constructor(public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Category) { 
            this.category = data;
        }

    ngOnInit() {  }

    save() {
        this.dialogRef.close(this.category);
    }

    close() {
        this.dialogRef.close();
    }
}