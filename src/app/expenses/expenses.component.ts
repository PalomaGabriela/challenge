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
            options: "all"
        });
    }

  
    ngOnInit() {
      
        this.form.valueChanges.subscribe(
            item => {
                console.log(item.options);
            }
        )
    }


}