import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    private courseList: CourseListItem[] = [
        {
            id: "1",
            title: "my first course",
            creationDate: "07/20/2018",
            duration: 120,
            description: "desc 1"
        },
        {
            id: "2",
            title: "my second course",
            creationDate: "11/14/2014",
            duration: 45,
            description: "desc 1"
        },
        {
            id: "3",
            title: "my third course",
            creationDate: "11/14/2019",
            duration: 150,
            description: "desc 1"
        },
        {
            id: "4",
            title: "my fourth course",
            creationDate: "06/03/2011",
            duration: 45,
            description: "desc 4"
        }
    ]
    constructor(private http: HttpClient) { }

    public getList(countToLoad?: string): Observable<CourseListItem[]> {
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, {params: {countToLoad}});
    }

    public getFilteredList(textFragment: string): Observable<CourseListItem[]> {
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, {params: {textFragment}});
    }

    public createCourse(course: CourseListItem): Observable<CourseListItem> {
        return this.http.post<CourseListItem>(`${BASE_URL}`, course);
    }

    public getItemById(id: string): CourseListItem {
        return this.courseList.find((item)=> {
            return item.id === id;
        })
    }

    public updateItem(course: CourseListItem):  Observable<CourseListItem> {
        return this.http.put<CourseListItem>(`${BASE_URL}`, course);
    }
    
    public removeItem(id: string): Observable<CourseListItem> {
        return this.http.delete<CourseListItem>(`${BASE_URL}/${id}`);
    }
}