import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.css']
})
export class DeleteCourseModalComponent implements OnInit {
    public isOpened = false;
    constructor() { }

    ngOnInit() {
    }

    public open(): void {
        console.log("xxx");
        this.isOpened = true; 
    }

    public close(): void {
        this.isOpened = false; 
    }
}
