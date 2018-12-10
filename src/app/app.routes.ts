import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { AddCoursePageComponent } from './course-page/add-course-page/add-course-page.component';
import { NotFoundPageComponent } from './course-page/not-found-page/not-found-page.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { CanActivateGuard } from './guards/canActivateGuard';

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
