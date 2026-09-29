import { Pipe, PipeTransform } from '@angular/core';

function pluralize(count: number, one: string, few: string, many: string): string {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod100 >= 11 && mod100 <= 14) {
    return many;
  }
  if (mod10 === 1) {
    return one;
  }
  if (mod10 >= 2 && mod10 <= 4) {
    return few;
  }
  return many;
}

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(date: Date): string {

    const diffSeconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diffSeconds < 60) {
      return `${diffSeconds} ${pluralize(diffSeconds, 'секунду', 'секунды', 'секунд')} назад`;
    }

    const diffMinutes = Math.floor(diffSeconds / 60);
    if (diffMinutes < 60) {
      return `${diffMinutes} ${pluralize(diffMinutes, 'минуту', 'минуты', 'минут')} назад`;
    }

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) {
      return `${diffHours} ${pluralize(diffHours, 'час', 'часа', 'часов')} назад`;
    }

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} ${pluralize(diffDays, 'день', 'дня', 'дней')} назад`;
  }
}
