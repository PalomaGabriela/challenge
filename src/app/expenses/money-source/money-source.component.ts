import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditMoneySourceDialogComponent } from './edit-money-source-dialog/index';

@Component({
    selector: 'challenge-source',
    templateUrl: 'money-source.component.html',
    styleUrls: ['money-source.component.css']
})

export class MoneySourceComponent implements OnInit {
    list = [];

    @Input()
    set sources(sources: any[]) {
        this.list = sources;
    }

    get sources(): any[] { return this.list; }
    constructor(public dialog: MatDialog) { }

    ngOnInit() {

    }

    openEdit(source: any) {
        this.dialog.open(EditMoneySourceDialogComponent, { data: source })
            .afterClosed()
            .subscribe(result => result);
    }
}