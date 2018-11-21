import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseService } from '../../course-list/course.service';
import { CourseListItem } from '../../course-list/course-list-item';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.css']
})
export class DeleteCourseModalComponent implements OnInit {
    @Input() item: CourseListItem;
    @Output() public wasDeleted: EventEmitter<boolean> = new EventEmitter();

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
        this.courseService.removeCourse(this.item.id)
        // .subscribe((courses)=> {
        //     this.wasDeleted.emit(true);
        // });
        
        this.isOpened = false; 
    }
}
