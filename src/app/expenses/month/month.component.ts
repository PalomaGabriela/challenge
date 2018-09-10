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

    @Input()
    set months(months: Month[]) {
        this.list = months;
        if (!!this.list) {
            this.calculateTotal();
        }
    }

    get months(): Month[] {
        return this.list;
    }

    constructor(public dialog: MatDialog) { }

    ngOnInit() { }

    calculateTotal() {
        this.list.map(item => {
            let total = 0;
            item.valores.map(value => {
                value.valor_pago = value.valor_pago.replace(',', '.');
                total = total + parseFloat(value.valor_pago)
            });
            item.total = total.toFixed(2);
        });
    }

    openEdit(month: string, value: Month) {
        var obj = {
            month: month,
            value: value
        };
        this.dialog.open(EditMonthDialogComponent, { data: obj, autoFocus: false })
            .afterClosed()
            .subscribe(result => {
                if (!!result) {
                    value.valor_pago = result.value.valor_pago
                    this.calculateTotal();
                }
            });
    }
}