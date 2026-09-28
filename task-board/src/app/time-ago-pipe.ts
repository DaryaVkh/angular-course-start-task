import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date): string {
    const minutes = Math.floor((Date.now() - value.getTime()) / 60_000);

    return minutes < 1
      ? 'только что'
      : `${minutes} минут назад`;
  }
}
