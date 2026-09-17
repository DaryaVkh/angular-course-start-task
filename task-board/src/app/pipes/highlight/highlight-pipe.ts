import { Pipe, PipeTransform } from '@angular/core';
import { HighlightedTextToken } from '../../types/highlighted-text-token';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(str: string, term: string): HighlightedTextToken[] {
    if (term === '') return [{ text: str, isHighlighted: false }];
    const regex = new RegExp(`(${term})`, 'gi');

    return str
      .split(regex)
      .map<HighlightedTextToken>((text) => ({ text, isHighlighted: regex.test(text) }));
  }
}
