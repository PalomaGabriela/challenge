import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Expense } from './expenses';
import { ExpensesService } from './expenses.service';

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
        private readonly expenseService: ExpensesService
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
        console.log('open graphics');
    }
}