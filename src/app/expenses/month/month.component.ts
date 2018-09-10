import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditMonthDialogComponent } from './edit-month-dialog/index';
import { Month } from '../shared/index';

@Component({
    selector: 'challenge-month',
    templateUrl: 'month.component.html',
    styleUrls: ['month.component.css']
})

export class MonthComponent implements OnInit {
    list = [];
    total = 0;

    @Input()
    set months(months: Month[]) {
        this.list = months;
        if(!!this.list)  {
            this.list.map(item => {
                item.valores.map(value => this.total = this.total + parseFloat(value.valor_pago));
                item.total = this.total;
            });
        }
    }

    get months(): Month[] { 
        return this.list; 
    }

    constructor(public dialog: MatDialog) { }

    ngOnInit() { }

    openEdit(month: string, value: Month) {
        var obj = {
            month: month,
            value: value
        };
        this.dialog.open(EditMonthDialogComponent, {data: obj, autoFocus: false})
            .afterClosed()
            .subscribe(result => result);
    }
}