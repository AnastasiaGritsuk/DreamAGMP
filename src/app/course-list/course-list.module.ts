import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { ColorBorderDirective } from '../shared/colorBorder.directive';
import { FormsModule } from '@angular/forms';
import { ModalsModule } from '../modals/modals.module';
import { SharedModule } from '../shared/shared.module';
import { ToolbarModule } from '../toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalsModule,
    SharedModule,
    ToolbarModule
  ],
  declarations: [
      CourseListComponent, 
      CourseListItemComponent, 
      ColorBorderDirective
    ],
  exports: [CourseListComponent]
})
export class CourseListModule { }
