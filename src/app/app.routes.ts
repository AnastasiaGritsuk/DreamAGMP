import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { AddCoursePageComponent } from './course-page/add-course-page/add-course-page.component';
import { NotFoundPageComponent } from './course-page/not-found-page/not-found-page.component';

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
    },
    {path: '404', component: NotFoundPageComponent},
    {path: '**', redirectTo: '/404'}
];