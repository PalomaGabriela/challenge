import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Month } from '../../index';

@Component({
    selector: 'challenge-edit-month-dialog',
    templateUrl: 'edit-month-dialog.component.html',
    styleUrls: ['edit-month-dialog.component.css']
})

export class EditMonthDialogComponent implements OnInit {
    value: Month;
    month: string;
    constructor(public dialogRef: MatDialogRef<EditMonthDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data) { 
            this.value = Object.assign({}, data.value);
            this.month = data.month;
        }

    ngOnInit() { 
    }

    save() {
        this.data.value = this.value;
        this.dialogRef.close(this.data);
    }

    close() {
        this.dialogRef.close();
    }
}