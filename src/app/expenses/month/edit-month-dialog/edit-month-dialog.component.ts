import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'challenge-edit-month-dialog',
    templateUrl: 'edit-month-dialog.component.html',
    styleUrls: ['edit-month-dialog.component.css']
})

export class EditMonthDialogComponent implements OnInit {
    month: any;
    constructor(public dialogRef: MatDialogRef<EditMonthDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { 
            this.month = data;
        }

    ngOnInit() { }

    close() {
        this.dialogRef.close();
    }
}