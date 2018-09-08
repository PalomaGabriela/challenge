import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Expense } from './expenses';
import { ExpensesService } from './expenses.service';
import { map } from 'rxjs/operators';
import { Month } from './month';

@Component({
    selector: 'challenge-expenses',
    templateUrl: 'expenses.component.html',
    styleUrls: ['expenses.component.css']
})

export class ExpensesComponent implements OnInit {

    expenses: Expense[] = [];
    months = [];
    categories = [];
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
            item => {
                console.log(item.options);
            }
        );

        this.expenseService.list()
            .subscribe(res => {
                this.expenses = res

                this.expenses.map(itens => {
                    this.months.push(
                        {
                            "mes": itens['mes_movimentacao'], "valor_empenhado": itens['valor_empenhado'],
                            "valor_pago": itens['valor_pago'], "valor_liquidado": itens['valor_liquidado']
                        }
                    );

                    this.categories.push(
                        {
                            "categoria": itens['categoria_economica_nome'], "valor_empenhado": itens['valor_empenhado'],
                            "valor_pago": itens['valor_pago'], "valor_liquidado": itens['valor_liquidado']
                        }
                    )
                });

                console.log(this.categories);
            });
    }

    edit(event: Event) {
        event.stopPropagation();
    }

}