import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Expense } from './expenses';
import { ExpensesService } from './expenses.service';
import { GraphicsDialogComponent } from './graphics-dialog/index';
import { MatDialog } from '@angular/material';
import { Category, Source, Month } from './shared/index';

@Component({
    selector: 'challenge-expenses',
    templateUrl: 'expenses.component.html',
    styleUrls: ['expenses.component.css']
})

export class ExpensesComponent implements OnInit {

    expenses: Expense[] = [];
    months: Month[] = [];
    categories: Category[] = [];
    sources: Source[] = [];
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

        this.form.valueChanges.subscribe(item => {
           
        });

        this.listByApi();

    }

    listByApi() {
        this.expenseService.listByAPI('month').subscribe(res => {
            this.months = res['result']['records'].months;
        });
        this.expenseService.listByAPI('category').subscribe(res => {
            this.categories = res['result']['records'].categories;
        });
        this.expenseService.listByAPI('source').subscribe(res => {
            this.sources = res['result']['records'].sources;
        });
    }

    openGraphics() {
        var obj = {
            months: this.months,
            categories: this.categories,
            sources: this.sources
        }
        this.dialog.open(GraphicsDialogComponent, { data: obj, autoFocus: false })
            .afterClosed()
            .subscribe(result => result);
    }
}