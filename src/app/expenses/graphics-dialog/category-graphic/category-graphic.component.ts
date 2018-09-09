import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../shared/index';

@Component({
    selector: 'challenge-category-graphic',
    templateUrl: 'category-graphic.component.html',
    styleUrls: ['category-graphic.component.css']
})

export class CategoryGraphicComponent implements OnInit {
    
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: false
    };
    public barChartLabels: string[] = [];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [];

    listCategories = [];

    @Input()
    set category(categories: Category[]) {
        this.listCategories = categories;
    }

    get category(): Category[] {
        return this.listCategories;
    }

    constructor() {
    }

    ngOnInit() {
        const categories = this.listCategories;
        let total = 0;
        const listTotal = [];
        categories.map(item => {
            this.barChartLabels.push(item.category);

            let valores = item.valores.map(value => parseFloat(value.valor_pago));
            valores.map(value => {
                total = total + value
            });
            listTotal.push(total);

            this.barChartData.push({
                data: listTotal,
                label: 'valor pago'
            });

        });

    }
}