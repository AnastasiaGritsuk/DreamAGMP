import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ClientHttpService } from './client-http.service';
import { LoadingBlockService } from '../loading-block/loading-block.service';
import { Course } from 'src/app/entities/course';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    private courses: Course[] = [];
    private coursesSubject: BehaviorSubject<Course[]> = new BehaviorSubject([]);

    constructor(
        private readonly clientHttpService: ClientHttpService,
        private readonly loadingBlockService: LoadingBlockService) { }

    public getCoursesObservable(): Observable<Course[]> {
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

    public createCourse(course: Course): void {
        this.clientHttpService.createCourse(course)
            .subscribe(response => {
                this.courses.push(course);
                this.coursesSubject.next(this.courses);
            });
    }

    public updateCourse(course: Course): void {
        this.clientHttpService.updateCourse(course)
            .subscribe(response => {
                const index = this.courses.findIndex((item) => {
                    return item.id === course.id;
                });
                this.courses[index] = course;
                this.coursesSubject.next(this.courses);
            });
    }

    public removeCourse(id: number): void {
        this.clientHttpService.removeCourse(id)
            .subscribe(response => {
                const index = this.courses.findIndex((item) => {
                    return item.id === id;
                });

                this.courses.splice(index, 1);
                this.coursesSubject.next(this.courses);
            });
    }

    public getCourseById(id: number): Observable<Course> {
        return this.clientHttpService.getCouresById(id);
    }
}
