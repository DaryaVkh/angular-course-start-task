import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date): string {
    const now = new Date();
    const minutes = Math.floor((now.getTime() - value.getTime()) / 60000);

    if (minutes < 1) {
      return 'только что';
    }

    return `${minutes} минут назад`;
  }
}
