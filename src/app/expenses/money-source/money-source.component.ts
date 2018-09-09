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
    total = 0;

    @Input()
    set sources(sources: Source[]) {
        this.list = sources;
    }

    get sources(): Source[] { return this.list; }
    constructor(public dialog: MatDialog) { }

    ngOnInit() {
        this.list.map(item => {
            item.valores.map(value => this.total = this.total + parseFloat(value.valor_pago));
        });
    }

    openEdit(source:string , unit: Source, index: number) {
        var obj = {
            source: source,
            unit: unit
        }
        this.dialog.open(EditMoneySourceDialogComponent, { data: obj, autoFocus: false })
            .afterClosed()
            .subscribe(result => {
                this.list.map(item => {
                    if(item.fonte_recurso === source) {
                        item.valores[index] = result.unit ? result.unit : item.valores[index];
                    }
                })
                unit = result
            });
    }
}