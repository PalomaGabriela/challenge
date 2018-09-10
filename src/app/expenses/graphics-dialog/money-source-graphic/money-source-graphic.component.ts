import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../../shared/index';

@Component({
    selector: 'challenge-money-source-graphic',
    templateUrl: 'money-source-graphic.component.html',
    styleUrls: ['money-source-graphic.component.css']
})

export class MoneySourceGraphicComponent implements OnInit {
    public pieChartLabels: string[] = [];
    public pieChartData: number[] = [];
    public pieChartType: string = 'pie';
    public pieChartLegend: boolean = true;

    listSources = [];

    @Input()
    set source(sources: Source[]) {
        this.listSources = sources;
    }

    get source(): Source[] {
        return this.listSources;
    }

    constructor() {
    }

    ngOnInit() {
        
        const sources = this.listSources;
        let total = 0;
        sources.map(item => {
            this.pieChartLabels.push(item.fonte_recurso);
            let valores = item.valores.map(value => {
                value.valor_pago = value.valor_pago.replace(',', '.');
                return parseFloat(value.valor_pago);
            });
            valores.map(value => {
                total = total + value
            });
            this.pieChartData.push(total);
        });

    }
}