import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from 'src/app/entities/course';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
    @Input() public course: Course;
    @Output() public action: EventEmitter<boolean> = new EventEmitter(false);

    public topRated = true;
    public showDeleteCourseDialog = false;

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
        const creationDate = new Date(this.course.creationDate);
        const currentDate = new Date(new Date().toLocaleDateString());
        const inTwoWeeksDate = new Date(new Date(new Date().toLocaleDateString()).setDate(currentDate.getDate() - 14));

        if ((creationDate < currentDate) && creationDate >= inTwoWeeksDate) {
            return 'green';
        } else if (creationDate > currentDate) {
            return 'blue';
        }
    }

    public editItem(): void {
        this.router.navigate(['./', this.course.id], { relativeTo: this.route });
    }

    public onDeleteAction(isDeleted: boolean) {
        if (isDeleted) {
            this.courseService.removeCourse(this.course.id);
        }

        this.showDeleteCourseDialog = false;
    }
}
