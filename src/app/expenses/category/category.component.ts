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

    @Input()
    set categories(categories: Category[]) {
        this.list = categories;
    }

    get categories(): Category[] { return this.list; }

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
        this.calculateTotal();
    }

    calculateTotal() {
        let total = 0;
        this.list.map(item => {
            item.valores.map(value => {
                value.valor_pago = value.valor_pago.replace(',', '.');
                total = total + parseFloat(value.valor_pago)
            });
            item.total = total.toFixed(2);
        });
    }

    openEdit(category: string, value: Category) {
        var obj = {
            category: category,
            value: value
        }
        this.dialog.open(EditCategoryDialogComponent, { data: obj, autoFocus: false })
            .afterClosed()
            .subscribe(result => {
                value.valor_pago = result.value.valor_pago;
                this.calculateTotal();
            });
    }
}