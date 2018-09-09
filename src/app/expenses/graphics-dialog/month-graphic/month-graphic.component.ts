import { Component, OnInit, Input } from '@angular/core';
import { Month, MonthPipe} from '../../shared/index';

@Component({
    selector: 'challenge-month-graphic',
    templateUrl: 'month-graphic.component.html',
    styleUrls: ['month-graphic.component.css']
})

export class MonthGraphicComponent implements OnInit {
    public pieChartLabels: string[] = [];
    public pieChartData: number[] = [];
    public pieChartType: string = 'bar';
    public pieChartLegend: boolean = false;

    listMonths = [];

    @Input()
    set month(months: Month[]) {
        this.listMonths = months;
    }

    get month(): Month[] {
        return this.listMonths;
    }

    constructor() {
        
    }

    ngOnInit() {
        const months = this.listMonths;
        let total = 0;
        months.map(item => {
            let monthPipe = new MonthPipe();
            this.pieChartLabels.push(monthPipe.transform(item.month));

            let valores = item.valores.map(value => parseFloat(value.valor_pago));
            valores.map(value => {
                total = total + value
            });
            this.pieChartData.push(total);
        });

    }
}