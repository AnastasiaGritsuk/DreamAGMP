import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/entities/course';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(items: Course[], substring: string): Course[] {
        return items.filter(item => item.title.includes(substring));
    }
}
