import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    private searchValue$: BehaviorSubject<string> = new BehaviorSubject('');

    constructor(private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {}

    public search(substr: string): void {
        if (substr.length > 2 || substr === '') {
            this.searchValue$.next(substr);
        }
    }

    public addCourse(): void {
        this.router.navigate(['./new'], { relativeTo: this.route });
    }

    public get serchValue(): Observable<string> {
        return this.searchValue$.asObservable();
    }
}
