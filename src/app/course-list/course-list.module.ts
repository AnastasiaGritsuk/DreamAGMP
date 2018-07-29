import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { ColorBorderDirective } from '../shared/colorBorder.directive';
import { DurationPipe } from '../shared/duration.pipe';
import { OrderByPipe } from '../shared/orderBy.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CourseListComponent, 
      CourseListItemComponent, 
      ColorBorderDirective, 
      DurationPipe,
      OrderByPipe
    ],
  exports: [CourseListComponent]
})
export class CourseListModule { }
