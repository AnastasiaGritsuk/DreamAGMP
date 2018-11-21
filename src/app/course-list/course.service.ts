import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CourseHttpService } from './course-http.service';
import { LoadingBlockService } from '../loading-block/loading-block.service';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    private coursesSubject: BehaviorSubject<CourseListItem[]> = new BehaviorSubject([]);

    constructor(
        private http: HttpClient,
        private readonly courseHttpService: CourseHttpService,
        private readonly loadingBlockService: LoadingBlockService) { }

    public getCoursesObservable(): Observable<CourseListItem[]> {
        return this.coursesSubject.asObservable();
    }

    public getList(countToLoad?: string): void {
        this.loadingBlockService.setIsLoadingObservable(true);
        this.courseHttpService.getList(countToLoad)
            .subscribe(courses => {
                this.coursesSubject.next(courses);
                this.loadingBlockService.setIsLoadingObservable(false);
            });
    }

    public getFilteredList(textFragment: string, countToLoad: string): void {
        this.loadingBlockService.setIsLoadingObservable(true);
        this.courseHttpService.getFilteredList(textFragment, countToLoad)
            .subscribe(courses => {
                this.coursesSubject.next(courses);
                this.loadingBlockService.setIsLoadingObservable(false);
            });
    }
    
    public createCourse(course: CourseListItem): void {
        this.courseHttpService.createCourse(course)
            .subscribe(response => console.log(response));
    }

    public updateCourse(course: CourseListItem): void {
        this.courseHttpService.updateCourse(course)
            .subscribe(response => console.log(response));
    }

    public removeCourse(id: string): void {
        this.courseHttpService.removeCourse(id)
            .subscribe(response => console.log(response));
    }

    public getCourseById(id: string): Observable<CourseListItem> {
        return this.courseHttpService.getCouresById(id);
            
    }
}