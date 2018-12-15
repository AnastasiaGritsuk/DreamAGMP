import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/entities/course';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
	providedIn: 'root'
})
export class ClientHttpService {

    constructor(private readonly http: HttpClient) { }

	public getList(countToLoad?: string): Observable<Course[]> {
		return this.http.get<Course[]>(`${BASE_URL}`, { params: { countToLoad } });
    }

	public getFilteredList(textFragment: string, countToLoad: string): Observable<Course[]> {
        return this.http.get<Course[]>(`${BASE_URL}`, { params: { textFragment, countToLoad }});
    }

	public createCourse(course: Course): Observable<Course> {
        return this.http.post<Course>(`${BASE_URL}`, course);
    }

	public updateCourse(course: Course):  Observable<Course> {
        return this.http.put<Course>(`${BASE_URL}`, course);
    }

	public removeCourse(id: number): Observable<Course> {
        return this.http.delete<Course>(`${BASE_URL}/${id}`);
    }

	public getCouresById(id: number): Observable<Course> {
        return this.http.get<Course>(`${BASE_URL}/${id}`);
    }
}
