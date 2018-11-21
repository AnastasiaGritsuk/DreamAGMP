import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBlockComponent } from './loading-block/loading-block.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingBlockComponent],
  exports: [LoadingBlockComponent]
})
export class LoadingBlockModule { }
