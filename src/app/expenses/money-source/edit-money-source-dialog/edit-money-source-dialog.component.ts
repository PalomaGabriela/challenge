import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Source } from '../../index';

@Component({
    selector: 'challenge-edit-money-source-dialog',
    templateUrl: 'edit-money-source-dialog.component.html',
    styleUrls: ['edit-money-source-dialog.component.css']
})

export class EditMoneySourceDialogComponent implements OnInit {
    month: Source;
    constructor(public dialogRef: MatDialogRef<EditMoneySourceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Source) { 
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