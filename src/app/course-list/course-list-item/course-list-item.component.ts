import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { DeleteCourseModalComponent } from '../../modals/delete-course-modal/delete-course-modal.component'
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
    selector: 'app-course-list-item',
    templateUrl: './course-list-item.component.html',
    styleUrls: ['./course-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {
    @Input() public courseListItem: CourseListItem;
    @Output() public action: EventEmitter<boolean> = new EventEmitter(false);

    public topRated: boolean = true;
    public showDeleteCourseDialog: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private readonly courseService: CourseService) { }

    ngOnInit() {
    }

    public deleteItem(): void {
        this.showDeleteCourseDialog = true;
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

    public onDeleteAction(isDeleted: boolean) {
        if (isDeleted) {
            this.courseService.removeCourse(this.courseListItem.id);
        }

        this.showDeleteCourseDialog = false;
    }
}
