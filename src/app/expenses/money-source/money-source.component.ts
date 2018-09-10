import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditMoneySourceDialogComponent } from './edit-money-source-dialog/index';
import { Source } from '../shared/index';

@Component({
    selector: 'challenge-source',
    templateUrl: 'money-source.component.html',
    styleUrls: ['money-source.component.css']
})

export class MoneySourceComponent implements OnInit {
    list = [];

    @Input()
    set sources(sources: Source[]) {
        this.list = sources;
    }

    get sources(): Source[] { return this.list; }
    constructor(public dialog: MatDialog) { }

    ngOnInit() {
        let total = 0;
        this.list.map(item => {
            item.valores.map(value => {
                value.valor_pago = value.valor_pago.replace(',', '.');
                total = total + parseFloat(value.valor_pago)
            });
            item.total = total.toFixed(2);
        });
    }

    openEdit(source: string, unit: Source) {
        var obj = {
            source: source,
            unit: unit
        }
        this.dialog.open(EditMoneySourceDialogComponent, { data: obj, autoFocus: false })
            .afterClosed()
            .subscribe(result => unit.unidade_nome = result.unit.unidade_nome);
    }
}