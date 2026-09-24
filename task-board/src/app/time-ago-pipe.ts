import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  private readonly formatter = new Intl.RelativeTimeFormat('ru', { numeric: 'auto' });

  private readonly units: [Intl.RelativeTimeFormatUnit, number][] = [
    ['year', 365 * 24 * 60 * 60],
    ['month', 30 * 24 * 60 * 60],
    ['week', 7 * 24 * 60 * 60],
    ['hour', 60 * 60],
    ['minute', 60],
  ]

  transform(value: Date): string {
    const seconds = Math.trunc((value.getTime() - Date.now()) / 1000);
    
    for (const [unit, secondsInUnit] of this.units) {
      if (Math.abs(seconds) >= secondsInUnit) {
        return this.formatter.format(Math.trunc(seconds / secondsInUnit), unit)
      }
    }

    return this.formatter.format(seconds, 'second');
  }
}
