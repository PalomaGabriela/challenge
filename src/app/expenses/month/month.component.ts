import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'challenge-month',
    templateUrl: 'month.component.html',
    styleUrls: ['month.component.css']
})

export class MonthComponent implements OnInit {
    list = [];

    @Input()
    set months(months: any[]) {
        this.list = months;
    }

    get months(): any[] { return this.list; }

    constructor() { }

    ngOnInit() { }
}