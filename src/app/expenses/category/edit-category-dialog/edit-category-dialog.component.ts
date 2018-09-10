import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Category } from '../../shared/index';

@Component({
    selector: 'challenge-edit-category-dialog',
    templateUrl: 'edit-category-dialog.component.html',
    styleUrls: ['edit-category-dialog.component.css']
})

export class EditCategoryDialogComponent implements OnInit {

    category: string;
    value: Category;
    
    constructor(public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data) { 
            this.category = data.category;
            this.value = Object.assign({}, data.value);
        }

    ngOnInit() {  }

    save() {
        this.data.value = this.value;
        this.dialogRef.close(this.data);
    }

    isValidated() {
        
        var validated = /^\d+(\.\d{1,2})?$/.test(this.value.valor_pago.toString());
        return validated;
    }

    close() {
        this.dialogRef.close();
    }
}