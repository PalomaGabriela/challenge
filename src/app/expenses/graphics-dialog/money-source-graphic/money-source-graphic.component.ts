import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../../index';

@Component({
    selector: 'challenge-money-source-graphic',
    templateUrl: 'money-source-graphic.component.html'
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
            // debugger
            this.pieChartLabels.push(item.fonte_recurso);

            let valores = item.valores.map(value => value.unidade_nome);
            this.pieChartData.push(valores);
            console.log(this.pieChartData)
        });

    }
}