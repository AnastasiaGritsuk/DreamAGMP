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

    // creationDate < currentDate && creationDate >= currentDate - 14days
    public get borderColor() {
        let creationDate = new Date(this.courseListItem.creationDate);
        let currentDate = new Date(new Date().toLocaleDateString());
        let inTwoWeeksDate = new Date(new Date(new Date().toLocaleDateString()).setDate(currentDate.getDate() - 14));

        if ((creationDate < currentDate) && creationDate >= inTwoWeeksDate) {
            return 'green';
        } else if (creationDate > currentDate) {
            return 'blue';
        };
    }
}
