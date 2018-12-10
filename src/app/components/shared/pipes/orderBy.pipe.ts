import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../course-list/course-list-item';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
    transform(items: CourseItem[]): CourseItem[] {
        items.sort((a, b) => {
            const aDate = new Date(a.creationDate);
            const bDate = new Date(b.creationDate);
            if (aDate > bDate) {
                return 1;
            } else if (aDate < bDate) {
                return -1;
            } else {
                return 0;
            }
        });
        return items;
    }
}