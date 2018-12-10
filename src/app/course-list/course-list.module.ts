import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { ColorBorderDirective } from '../shared/colorBorder.directive';
import { FormsModule } from '@angular/forms';
import { ModalsModule } from '../modals/modals.module';
import { SharedModule } from '../shared/shared.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { RouterModule } from '@angular/router';
import { LoadMoreModule } from '../load-more/load-more.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalsModule,
    SharedModule,
    ToolbarModule,
    LoadMoreModule,
    BreadcrumbsModule,
    RouterModule
  ],
  declarations: [
      CourseListComponent,
      CourseItemComponent,
      ColorBorderDirective
    ],
  exports: [CourseListComponent]
})
export class CourseListModule { }
