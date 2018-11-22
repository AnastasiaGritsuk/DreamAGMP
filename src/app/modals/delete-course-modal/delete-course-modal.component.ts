import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseListItem } from '../../course-list/course-list-item';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.css']
})
export class DeleteCourseModalComponent implements OnInit {
    @Input() item: CourseListItem;
    @Input() public isOpen = false;
    @Output() public action: EventEmitter<boolean> = new EventEmitter(false);

    constructor() { }

    ngOnInit() {
    }

    public delete(): void {
        this.action.emit(true);
    }

    public close(): void {
        this.isOpen = false;
    }
}
