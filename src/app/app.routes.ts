import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list/course-list.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses', component: CourseListComponent }
];