import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date | null | undefined): string {
    if (!value) {
      return '';
    }

    const seconds = Math.floor((Date.now() - value.getTime()) / 1000);

    if (seconds < 60) {
      return 'только что';
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} ${this.pluralize(minutes, 'минуту', 'минуты', 'минут')} назад`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} ${this.pluralize(hours, 'час', 'часа', 'часов')} назад`;
    }

    const days = Math.floor(hours / 24);
    return `${days} ${this.pluralize(days, 'день', 'дня', 'дней')} назад`;
  }

  private pluralize(n: number, one: string, few: string, many: string): string {
    const mod10 = n % 10;
    const mod100 = n % 100;

    if (mod10 === 1 && mod100 !== 11) {
      return one;
    }
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
      return few;
    }
    return many;
  }
}
