import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../course-list/course-list-item';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(items: CourseItem[], substring: string): CourseItem[] {
        return items.filter(item => item.title.includes(substring));
    }
}