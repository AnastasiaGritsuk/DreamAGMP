import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    @Output() onAddCourse: EventEmitter<boolean> = new EventEmitter();

    private searchValue$: BehaviorSubject<string> = new BehaviorSubject("");

    constructor() { }

    ngOnInit() {}
    
    public search(substr: string): void {
        if (substr.length > 2 || substr == "") {
            this.searchValue$.next(substr);
        }
    }

    public addCourse(): void {
        console.log("addCourse");
        this.onAddCourse.emit(true);
    }

    public serchValue() {
        return this.searchValue$.asObservable();
    }
}
