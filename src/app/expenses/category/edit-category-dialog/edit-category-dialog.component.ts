import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'challenge-edit-category-dialog',
    templateUrl: 'edit-category-dialog.component.html',
    styleUrls: ['edit-category-dialog.component.css']
})

export class EditCategoryDialogComponent implements OnInit {
    month: any;
    constructor(public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { 
            this.month = Object.assign({}, data);
        }

    ngOnInit() { }

    save() {
        this.data = this.month;
        this.dialogRef.close(this.data);
    }

    close() {
        this.dialogRef.close();
    }
}