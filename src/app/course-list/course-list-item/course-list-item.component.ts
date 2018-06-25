import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseListItem } from '../course-list-item';

@Component({
    selector: 'app-course-list-item',
    templateUrl: './course-list-item.component.html',
    styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
    @Input() public courseListItem: CourseListItem;
    @Output() public delete: EventEmitter<number> = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    public deleteItem() {
        this.delete.emit(this.courseListItem.id);
    }

}
