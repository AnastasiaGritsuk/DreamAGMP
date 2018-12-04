import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseListItem } from './course-list-item';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
	providedIn: 'root'
})
export class CourseHttpService {

	constructor(private readonly http: HttpClient) { }

	public getList(countToLoad?: string): Observable<CourseListItem[]> {
		return this.http.get<CourseListItem[]>(`${BASE_URL}`, { params: { countToLoad } });
	}

	public getFilteredList(textFragment: string, countToLoad: string): Observable<CourseListItem[]> {
        return this.http.get<CourseListItem[]>(`${BASE_URL}`, { params: { textFragment, countToLoad }});
	}
	
	public createCourse(course: CourseListItem): Observable<CourseListItem> {
        return this.http.post<CourseListItem>(`${BASE_URL}`, course);
	}
	
	public updateCourse(course: CourseListItem):  Observable<CourseListItem> {
        return this.http.put<CourseListItem>(`${BASE_URL}`, course);
	}
	
	public removeCourse(id: string): Observable<CourseListItem> {
        return this.http.delete<CourseListItem>(`${BASE_URL}/${id}`);
	}
	
	public getCouresById(id: string): Observable<CourseListItem> {
        return this.http.get<CourseListItem>(`${BASE_URL}/${id}`);
    }
}
