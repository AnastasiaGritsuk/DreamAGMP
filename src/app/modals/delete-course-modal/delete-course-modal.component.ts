import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../../course-list/course.service';
import { CourseListItem } from '../../course-list/course-list-item';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.css']
})
export class DeleteCourseModalComponent implements OnInit {
    @Input() item: CourseListItem;
    public isOpened = false;
    constructor(private courseService: CourseService) { }

    ngOnInit() {
    }

    public open(): void {
        this.isOpened = true; 
    }

    public close(): void {
        this.isOpened = false; 
    }

    public delete(): void {
        this.courseService.removeItem(this.item.id);
        this.isOpened = false; 
    }
}
