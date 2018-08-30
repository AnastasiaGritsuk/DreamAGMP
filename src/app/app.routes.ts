import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { AddCoursePageComponent } from './course-page/add-course-page/add-course-page.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { 
        path: 'courses', 
        component: CourseListComponent,
        children: [
            {
                path: 'new',
                component: AddCoursePageComponent
            } 
        ]
    }
];