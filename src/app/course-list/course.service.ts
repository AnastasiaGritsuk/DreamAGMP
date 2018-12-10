import { Injectable } from '@angular/core';
import { CourseItem } from './course-list-item';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ClientHttpService } from './client-http.service';
import { LoadingBlockService } from '../loading-block/loading-block.service';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    private courses: CourseItem[] = [];
    private coursesSubject: BehaviorSubject<CourseItem[]> = new BehaviorSubject([]);

    constructor(
        private readonly clientHttpService: ClientHttpService,
        private readonly loadingBlockService: LoadingBlockService) { }

    public getCoursesObservable(): Observable<CourseItem[]> {
        return this.coursesSubject.asObservable();
    }

    public getList(countToLoad?: string): void {
        this.loadingBlockService.setIsLoadingObservable(true);
        this.clientHttpService.getList(countToLoad)
            .subscribe(courses => {
                this.courses = courses;
                this.coursesSubject.next(this.courses);
                this.loadingBlockService.setIsLoadingObservable(false);
            });
    }

    public getFilteredList(textFragment: string, countToLoad: string): void {
        this.loadingBlockService.setIsLoadingObservable(true);
        this.clientHttpService.getFilteredList(textFragment, countToLoad)
            .subscribe(courses => {
                this.courses = courses;
                this.coursesSubject.next(this.courses);
                this.loadingBlockService.setIsLoadingObservable(false);
            });
    }

    public createCourse(course: CourseItem): void {
        this.clientHttpService.createCourse(course)
            .subscribe(response => {
                this.courses.push(course);
                this.coursesSubject.next(this.courses);
            });
    }

    public updateCourse(course: CourseItem): void {
        this.clientHttpService.updateCourse(course)
            .subscribe(response => {
                const index = this.courses.findIndex((item) => {
                    return item.id === course.id;
                });
                this.courses[index] = course;
                this.coursesSubject.next(this.courses);
            });
    }

    public removeCourse(id: string): void {
        this.clientHttpService.removeCourse(id)
            .subscribe(response => {
                const index = this.courses.findIndex((item) => {
                    return item.id === id;
                });

                this.courses.splice(index, 1);
                this.coursesSubject.next(this.courses);
            });
    }

    public getCourseById(id: string): Observable<CourseItem> {
        return this.clientHttpService.getCouresById(id);
    }
}
