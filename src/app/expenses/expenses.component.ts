import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'challenge-expenses',
    templateUrl: 'expenses.component.html',
    styleUrls: ['expenses.component.css']
})

export class ExpensesComponent implements OnInit {

    form: FormGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            options: 1
        });
    }

    ngOnInit() {
      
    }
}