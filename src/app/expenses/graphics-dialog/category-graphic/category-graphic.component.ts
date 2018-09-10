import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../shared/index';

@Component({
    selector: 'challenge-category-graphic',
    templateUrl: 'category-graphic.component.html',
    styleUrls: ['category-graphic.component.css']
})

export class CategoryGraphicComponent implements OnInit {
    
    public pieChartLabels: string[] = [];
    public pieChartData: number[] = [];
    public pieChartType: string = 'bar';
    public pieChartLegend: boolean = false;

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
        categories.map(item => {
            this.pieChartLabels.push(item.category);

            let valores = item.valores.map(value => parseFloat(value.valor_pago));
            valores.map(value => {
                total = total + value
            });
            this.pieChartData.push(total);
        });

    }
}