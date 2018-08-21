import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteCourseModalComponent } from './delete-course-modal/delete-course-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeleteCourseModalComponent],
  exports: [DeleteCourseModalComponent]
})
export class ModalsModule { }
