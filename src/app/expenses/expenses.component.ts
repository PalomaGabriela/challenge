import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Expense } from './expenses';
import { ExpensesService } from './expenses.service';
import { GraphicsDialogDialogComponent } from './graphics-dialog/index';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'challenge-expenses',
    templateUrl: 'expenses.component.html',
    styleUrls: ['expenses.component.css']
})

export class ExpensesComponent implements OnInit {

    expenses: Expense[] = [];
    form: FormGroup;
    
    constructor(
        fb: FormBuilder,
        private readonly expenseService: ExpensesService,
        public dialog: MatDialog
    ) {
        this.form = fb.group({
            options: "month"
        });
    }


    ngOnInit() {

        this.form.valueChanges.subscribe(
            item => {console.log(item.options);}
        );

        this.expenseService.list()
            .subscribe(res => {
                this.expenses = res['result']['records'];
            });
    }

    openGraphics() {
        this.dialog.open(GraphicsDialogDialogComponent, {data: this.expenses})
            .afterClosed()
            .subscribe(result => result);
    }
}