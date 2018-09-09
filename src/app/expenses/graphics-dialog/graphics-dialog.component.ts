import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'challenge-graphics-dialog',
    templateUrl: 'graphics-dialog.component.html',
    styleUrls: ['graphics-dialog.component.css']
})

export class GraphicsDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<GraphicsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }
    ngOnInit() {  }

    close() {
        this.dialogRef.close();
    }
}