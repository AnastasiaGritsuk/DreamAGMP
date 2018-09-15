import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
    
})
export class CourseListComponent implements OnInit {
    public courses: CourseListItem[] = [];
    private maxCoursesCount: number = 5;

    constructor(
        private courseService: CourseService,
        private router: Router,
        private route: ActivatedRoute) {}

    public ngOnInit() {
        this.courseService.getListLimited(0, this.maxCoursesCount).subscribe((courses) => {
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

    public handleWasDeletedParent() {
        this.courseService.getList().subscribe((courses) => {
            this.courses = courses;
        });
    }

    public get isLoadMore(): boolean {
        return this.courses.length > this.maxCoursesCount;
    }
}
