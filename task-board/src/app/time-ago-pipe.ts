import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date): string {
    if (!value) return '';
    const diffMs = Date.now() - value.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    return `${diffMins} минут назад`;
  }
}
