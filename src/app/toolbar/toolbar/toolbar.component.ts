import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    @Output() onSearch: EventEmitter<string> = new EventEmitter();
    public searchValue: string = "";

    constructor() { }

    ngOnInit() {
    }
    
    public search(): void {
        this.onSearch.emit(this.searchValue);
    }
}
