import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
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

    public get serchValue(): Observable<string> {
        return this.searchValue$.asObservable();
    }
}
