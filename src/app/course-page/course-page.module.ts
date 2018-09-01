import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [AddCoursePageComponent, NotFoundPageComponent],
    exports: [AddCoursePageComponent]
})
export class CoursePageModule { }
