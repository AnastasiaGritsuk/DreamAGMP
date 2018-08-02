import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../course-list/course-list-item';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(items: CourseListItem[], substring: string): CourseListItem[] {
        return items.filter((item)=> item.title.includes(substring));
    }
}