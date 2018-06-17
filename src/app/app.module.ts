import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { CourseListItemComponent } from './course-list/course-list-item/course-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseListItemComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
