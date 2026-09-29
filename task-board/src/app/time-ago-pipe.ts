import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})

export class TimeAgoPipe implements PipeTransform {

  transform(date: Date): string {
    const diffInSeconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diffInSeconds < 60) {
      return `${diffInSeconds} ${this.getPlural(diffInSeconds, 'секунду', 'секунды', 'секунд')} назад`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} ${this.getPlural(diffInMinutes, 'минуту', 'минуты', 'минут')} назад`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} ${this.getPlural(diffInHours, 'час', 'часа', 'часов')} назад`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} ${this.getPlural(diffInDays, 'день', 'дня', 'дней')} назад`;
  }

  private getPlural(number: number, one: string, two: string, five: string): string {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) return five;
    n %= 10;
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return two;
    return five;
  }
}