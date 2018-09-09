import { Component, OnInit, Input } from '@angular/core';
import { EditCategoryDialogComponent } from './edit-category-dialog/index';
import { MatDialog } from '@angular/material';
import { Category } from '../shared/index';

@Component({
    selector: 'challenge-categories',
    templateUrl: 'category.component.html',
    styleUrls: ['category.component.css']
})

export class CategoryComponent implements OnInit {
    list = [];
    total = 0;

    @Input()
    set categories(categories: Category[]) {
        this.list = categories;
    }

    get categories(): Category[] { return this.list; }

    constructor(public dialog: MatDialog) { }

    ngOnInit() { 
        this.list.map(item => {
            item.valores.map(value => this.total = this.total + parseFloat(value.valor_pago));
        });
    }

    openEdit(category: string, value: Category) {
        var obj = {
            category: category,
            value: value
        }
        this.dialog.open(EditCategoryDialogComponent, { data: obj, autoFocus: false })
            .afterClosed()
            .subscribe(result => category = result);
    }
}