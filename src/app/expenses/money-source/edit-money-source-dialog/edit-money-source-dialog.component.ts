import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Source } from '../../index';

@Component({
    selector: 'challenge-edit-money-source-dialog',
    templateUrl: 'edit-money-source-dialog.component.html',
    styleUrls: ['edit-money-source-dialog.component.css']
})

export class EditMoneySourceDialogComponent implements OnInit {
    unit: Source;
    source: string;
    constructor(public dialogRef: MatDialogRef<EditMoneySourceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data) { 
            this.unit = Object.assign({}, data.unit);
            this.source = data.source;
        }

    ngOnInit() { }

    save() {
        this.dialogRef.close(this.data);
    }

    close() {
        this.dialogRef.close();
    }
}