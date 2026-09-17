import { Component, input } from '@angular/core';
import { HighlightedTextToken } from '../../types/highlighted-text-token';

@Component({
  imports: [],
  selector: 'app-highlighted-text',
  styles: ``,
  template: `
    @for (token of tokens(); track $index) {
      @if (token.isHighlighted) {<mark>{{ token.text }}</mark>}
      @else {{{ token.text }}}
    }
  `,
})
export class HighlightedTextComponent {
  readonly tokens = input.required<HighlightedTextToken[]>();
}
