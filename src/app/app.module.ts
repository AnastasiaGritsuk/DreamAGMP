import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './course-list/course-list.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { LoadMoreModule } from './load-more/load-more.module';

import { ColorBorderDirective } from './shared/colorBorder.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourseListModule,
    BreadcrumbsModule,
    ToolbarModule,
    LoadMoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
