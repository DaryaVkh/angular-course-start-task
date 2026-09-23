import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgo implements PipeTransform {
  transform(value: Date): string {
    if (!value) {
      return 'Только что';
    }

    const now = new Date();
    const difference = now.getTime() - value.getTime();
    const minutes = Math.floor(difference / (1000 * 60));
    if (minutes < 1) {
      return 'Только что';
    }
    if (minutes < 60) {
      return `${minutes} минут назад`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
      return `${hours} часов назад`;
    }

    const days = Math.floor(hours / 24);

    return `${days} дней назад`;
  }
}
