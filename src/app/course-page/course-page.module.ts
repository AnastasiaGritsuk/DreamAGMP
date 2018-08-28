import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddCoursePageComponent],
  exports: [AddCoursePageComponent]
})
export class CoursePageModule { }
