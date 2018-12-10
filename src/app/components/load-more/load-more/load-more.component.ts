import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course-list/course.service';

@Component({
    selector: 'app-load-more',
    templateUrl: './load-more.component.html',
    styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
    private portion = 0;
    private maxCount = 5;
    public isDisabled = false;

    constructor(private courseService: CourseService) { }

    ngOnInit() {
    }

    public loadMore() {
        this.portion = this.portion + 1;
        const startIndex = this.portion * this.maxCount;
        const count = startIndex + this.maxCount;
        this.courseService.getList(count.toString());
    }
}
