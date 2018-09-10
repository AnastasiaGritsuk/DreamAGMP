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

    public getList(): Observable<CourseListItem[]> {
        return this.http.get<CourseListItem[]>(`${BASE_URL}`);
    }

    public getFilteredList(textFragment: string): Observable<CourseListItem[]> {
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, {params: {textFragment}});
    }

    public createCourse(course: CourseListItem): void {
        this.courseList.push(course);
    }

    public getItemById(id: string): CourseListItem {
        return this.courseList.find((item)=> {
            return item.id === id;
        })
    }

    public updateItem(course: CourseListItem): void {
        let index = this.courseList.findIndex((item)=> {
            return item.id === course.id;
        });

        course[index] = course; 
    }
    
    public removeItem(id: string): Observable<CourseListItem> {
        console.log('url ' + `${BASE_URL}/${id}`)
        return this.http.delete<CourseListItem>(`${BASE_URL}/${id}`);
    }
}