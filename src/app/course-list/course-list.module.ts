import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { ColorBorderDirective } from '../shared/colorBorder.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseListComponent, CourseListItemComponent, ColorBorderDirective],
  exports: [CourseListComponent]
})
export class CourseListModule { }
