import { Routes } from '@angular/router';

import { CanActivateGuard } from './guards/canActivateGuard';
import { CourseListComponent } from './components/course-list/course-list/course-list.component';
import { AddCoursePageComponent } from './components/course-page/add-course-page/add-course-page.component';
import { LoginPageComponent } from './components/login-page/login-page/login-page.component';
import { NotFoundPageComponent } from './components/course-page/not-found-page/not-found-page.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    {
        path: 'courses',
        component: CourseListComponent,
        canActivate: [CanActivateGuard],
        children: [
            {
                path: 'new',
                component: AddCoursePageComponent,
                canActivate: [CanActivateGuard],
                data: {
                    breadcrumb: ' /new'
                }
            },
            {
                path: ':id',
                component: AddCoursePageComponent,
                canActivate: [CanActivateGuard],
                data: {
                    breadcrumb: ' /'
                }
            }
        ]
    },
    { path: 'login', component: LoginPageComponent },
    { path: '404', component: NotFoundPageComponent },
    { path: '**', redirectTo: '/404' }
];
