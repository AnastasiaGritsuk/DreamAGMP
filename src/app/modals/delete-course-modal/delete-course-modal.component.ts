import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../../course-list/course-list-item';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.scss']
})
export class DeleteCourseModalComponent implements OnInit {
    @Input() item: CourseItem;
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
