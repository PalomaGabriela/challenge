import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'challenge-source',
    templateUrl: 'money-source.component.html',
    styleUrls: ['money-source.component.css']
})

export class MoneySourceComponent implements OnInit {
    list = [];

    @Input()
    set sources(sources: any[]) {
        this.list = sources;
    }

    get sources(): any[] { return this.list; }

    constructor() { }

    ngOnInit() { }

    edit(event: Event) {
        event.stopPropagation();
    }
}