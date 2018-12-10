import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
    private readonly minInHour: number = 60;
    transform(value: number): string {
        if (value && value > this.minInHour) {
            const hours = Math.trunc(value / this.minInHour);
            const minutes = value % this.minInHour;
            return hours + 'h ' + minutes + ' min';
        }
        return value + ' min';
    }
}
