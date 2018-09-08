import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditMonthDialogComponent } from './edit-month-dialog/index';
import { Month } from '../index';

@Component({
    selector: 'challenge-month',
    templateUrl: 'month.component.html',
    styleUrls: ['month.component.css']
})

export class MonthComponent implements OnInit {
    list = [];

    @Input()
    set months(months: Month[]) {
        this.list = months;
    }

    get months(): Month[] { 
        return this.list; 
    }

    constructor(public dialog: MatDialog) { }

    ngOnInit() { 

    }

    openEdit(event: Event, month: Month) {
        event.stopPropagation();
        this.dialog.open(EditMonthDialogComponent, {data: month})
            .afterClosed()
            .subscribe(result => result);
    }
}