import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { DeleteCourseModalComponent } from '../../modals/delete-course-modal/delete-course-modal.component'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-course-list-item',
    templateUrl: './course-list-item.component.html',
    styleUrls: ['./course-list-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {
    @Input() public courseListItem: CourseListItem;
    @Output() public delete: EventEmitter<string> = new EventEmitter();

    @ViewChild("deleteCourseModal") deleteCourseModal: DeleteCourseModalComponent;

    public topRated: boolean = true;
    constructor(private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
    }

    public deleteItem(): void {
        this.deleteCourseModal.open();
        this.delete.emit(this.courseListItem.id);
    }

    public get borderColor(): string {
        let creationDate = new Date(this.courseListItem.creationDate);
        let currentDate = new Date(new Date().toLocaleDateString());
        let inTwoWeeksDate = new Date(new Date(new Date().toLocaleDateString()).setDate(currentDate.getDate() - 14));

        if ((creationDate < currentDate) && creationDate >= inTwoWeeksDate) {
            return 'green';
        } else if (creationDate > currentDate) {
            return 'blue';
        };
    }

    public editItem(): void {
        this.router.navigate(['./', this.courseListItem.id], { relativeTo: this.route });
    }
}
