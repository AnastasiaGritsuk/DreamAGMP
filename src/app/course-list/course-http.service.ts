import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseItem } from './course-list-item';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
	providedIn: 'root'
})
export class CourseHttpService {

	constructor(private readonly http: HttpClient) { }

	public getList(countToLoad?: string): Observable<CourseItem[]> {
		return this.http.get<CourseItem[]>(`${BASE_URL}`, { params: { countToLoad } });
	}

	public getFilteredList(textFragment: string, countToLoad: string): Observable<CourseItem[]> {
        return this.http.get<CourseItem[]>(`${BASE_URL}`, { params: { textFragment, countToLoad }});
	}
	
	public createCourse(course: CourseItem): Observable<CourseItem> {
        return this.http.post<CourseItem>(`${BASE_URL}`, course);
	}
	
	public updateCourse(course: CourseItem):  Observable<CourseItem> {
        return this.http.put<CourseItem>(`${BASE_URL}`, course);
	}
	
	public removeCourse(id: string): Observable<CourseItem> {
        return this.http.delete<CourseItem>(`${BASE_URL}/${id}`);
	}
	
	public getCouresById(id: string): Observable<CourseItem> {
        return this.http.get<CourseItem>(`${BASE_URL}/${id}`);
    }
}
