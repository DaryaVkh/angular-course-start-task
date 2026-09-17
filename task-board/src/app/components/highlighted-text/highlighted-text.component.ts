import { Component, computed, input } from '@angular/core';
import { HighlightedTextToken } from '../../types/highlighted-text-token';

@Component({
  imports: [],
  selector: 'app-highlighted-text',
  styles: ``,
  template: `
    @for (token of tokens(); track $index) {
      @if (token.isHighlighted) {<mark>{{ token.text }}</mark> }
      @else {{{ token.text }}}
    }
  `,
})
export class HighlightedTextComponent {
  readonly text = input.required<string>();
  readonly highlightTerm = input.required<string>();

  readonly tokens = computed(() => {
    if (this.highlightTerm() === '') return [{ text: this.text(), isHighlighted: false }];
    const regex = new RegExp(`(${this.highlightTerm()})`, 'gi');

    return this.text()
      .split(regex)
      .map<HighlightedTextToken>((text) => ({ text, isHighlighted: regex.test(text) }));
  });
}
