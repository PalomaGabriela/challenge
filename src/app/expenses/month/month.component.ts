import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditMonthDialogComponent } from './edit-month-dialog/index';

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

    constructor(public dialog: MatDialog) { }

    ngOnInit() { }

    openEdit(event: Event, month: any) {
        event.stopPropagation();
        this.dialog.open(EditMonthDialogComponent, {data: month})
            .afterClosed()
            .subscribe(result => console.log('fechou'));
    }
}