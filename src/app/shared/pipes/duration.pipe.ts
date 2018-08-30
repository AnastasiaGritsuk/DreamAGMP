import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
    private readonly minInHour: number = 60;
    transform(value: number): string {
        if (value > this.minInHour) {
            var hours = Math.trunc(value / this.minInHour);
            var minutes = value % this.minInHour;
            return hours + "h "+ minutes + "min";
        } 
        return value + "min";
    }
}