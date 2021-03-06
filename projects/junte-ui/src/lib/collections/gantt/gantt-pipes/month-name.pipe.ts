import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({name: 'monthName'})
export class MonthNamePipe implements PipeTransform {
  transform(date: Date): string {
    return format(date, 'MMM');
  }
}
