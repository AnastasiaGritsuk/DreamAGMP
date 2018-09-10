import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [DurationPipe, FilterPipe, OrderByPipe],
    exports: [DurationPipe, FilterPipe, OrderByPipe]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: [ ]
      };
    }
  }