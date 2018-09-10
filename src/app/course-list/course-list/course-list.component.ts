import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { CourseService } from '../course.service';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css'],
    providers: [FilterPipe]
    
})
export class CourseListComponent implements OnInit {
    public courses: CourseListItem[] = [];

    constructor(
        private courseService: CourseService,
        private filterPipe: FilterPipe,
        private router: Router,
        private route: ActivatedRoute) {}

    public ngOnInit() {
        this.courseService.getList().subscribe((courses) => {
            this.courses = courses;
        });
    }

    public search(queryString: string): void {
        this.courseService.getFilteredList(queryString).subscribe((filteredCourses) => {
            this.courses = filteredCourses;
        });
    }

    public handleDelete(id: number): void {
        console.log(id);
    }

    public onAddCourseClick(): void {
        this.router.navigate(['./new'], { relativeTo: this.route });
    }
}
