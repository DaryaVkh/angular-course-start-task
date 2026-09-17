import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-search-bar',
  styleUrl: './search-bar.component.scss',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  readonly termChanged = output<string>();
}
