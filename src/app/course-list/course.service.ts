import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/courses';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    constructor(
        private http: HttpClient) { }

    public getList(countToLoad?: string): Observable<CourseListItem[]> {
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, {params: {countToLoad}});
    }

    public getFilteredList(textFragment: string): Observable<CourseListItem[]> {
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, {params: {textFragment}});
    }

    public createCourse(course: CourseListItem): Observable<CourseListItem> {
        return this.http.post<CourseListItem>(`${BASE_URL}`, course);
    }

    public getItemById(id: string): Observable<CourseListItem> {
        return this.http.get<CourseListItem>(`${BASE_URL}/${id}`);
    }

    public updateItem(course: CourseListItem):  Observable<CourseListItem> {
        return this.http.put<CourseListItem>(`${BASE_URL}`, course);
    }
    
    public removeItem(id: string): Observable<CourseListItem> {
        return this.http.delete<CourseListItem>(`${BASE_URL}/${id}`);
    }
}