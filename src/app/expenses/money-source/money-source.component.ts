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

    }

    openEdit(source:string , unit: Source) {
        var obj = {
            source: source,
            unit: unit
        }
        this.dialog.open(EditMoneySourceDialogComponent, { data: obj, autoFocus: false })
            .afterClosed()
            .subscribe(result => result);
    }
}