import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date): string {
    const diffMinutes = Math.floor((Date.now() - new Date(value).getTime()) / 60000);

    if (diffMinutes < 1)
      return 'только что';

    if (diffMinutes < 60)
      return `${diffMinutes} минут назад`;

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24)
      return `${diffHours} часов назад`;

    const diffDays = Math.floor(diffHours / 24);

    return `${diffDays} дней назад`;
  }
}
