import { Pipe, PipeTransform } from '@angular/core';

const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ['year', 365 * 24 * 60 * 60],
  ['month', 30 * 24 * 60 * 60],
  ['week', 7 * 24 * 60 * 60],
  ['day', 24 * 60 * 60],
  ['hour', 60 * 60],
  ['minute', 60],
];

const formatter = new Intl.RelativeTimeFormat('ru', { numeric: 'always' });

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date | null | undefined, now: Date = new Date()): string {
    if (!value) {
      return '';
    }

    const seconds = Math.round((now.getTime() - value.getTime()) / 1000);

    for (const [unit, unitSeconds] of UNITS) {
      if (Math.abs(seconds) >= unitSeconds) {
        return formatter.format(-Math.trunc(seconds / unitSeconds), unit);
      }
    }

    return 'только что';
  }
}
