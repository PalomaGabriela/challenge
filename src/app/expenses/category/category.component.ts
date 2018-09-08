import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'challenge-categories',
    templateUrl: 'category.component.html',
    styleUrls: ['category.component.css']
})

export class CategoryComponent implements OnInit {
    list = [];

    @Input()
    set categories(categories: any[]) {
        this.list = categories;
    }

    get categories(): any[] { return this.list; }

    constructor() { }

    ngOnInit() { }
}