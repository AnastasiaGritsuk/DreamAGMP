import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { DeleteCourseModalComponent } from '../../modals/delete-course-modal/delete-course-modal.component'

@Component({
    selector: 'app-course-list-item',
    templateUrl: './course-list-item.component.html',
    styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
    @Input() public courseListItem: CourseListItem;
    @Output() public delete: EventEmitter<number> = new EventEmitter();

    @ViewChild("deleteCourseModal") deleteCourseModal: DeleteCourseModalComponent;

    public topRated: boolean = true;
    constructor() { }

    ngOnInit() {
    }

    public deleteItem() {
        this.deleteCourseModal.open();
        this.delete.emit(this.courseListItem.id);
    }

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
