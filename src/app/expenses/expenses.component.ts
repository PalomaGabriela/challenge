import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Expanse } from './expenses';

@Component({
    selector: 'challenge-expenses',
    templateUrl: 'expenses.component.html',
    styleUrls: ['expenses.component.css']
})

export class ExpensesComponent implements OnInit {

    folders: Expanse[] = [
        {
            name: 'Despesas mensais'
        },
        {
            name: 'Despesas'
        },
        {
            name: 'Despesas',
        }
    ];
    
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

edit(event: Event) {
    event.stopPropagation();
}

}