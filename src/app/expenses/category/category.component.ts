import { Component, OnInit, Input } from '@angular/core';
import { EditCategoryDialogComponent } from './edit-category-dialog/index';
import { MatDialog } from '@angular/material';
import { Category } from '../index';

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

    ngOnInit() { }

    openEdit(category: Category) {
        event.stopPropagation();
        this.dialog.open(EditCategoryDialogComponent, { data: category })
            .afterClosed()
            .subscribe(result => category = result);
    }
}