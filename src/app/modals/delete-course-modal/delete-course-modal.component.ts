import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.css']
})
export class DeleteCourseModalComponent implements OnInit {
    @Input() title: string;
    public isOpened = false;
    constructor() { }

    ngOnInit() {
    }

    public open(): void {
        this.isOpened = true; 
    }

    public close(): void {
        this.isOpened = false; 
    }

    public delete(): void {
        console.log("delete course item");
    }
}
