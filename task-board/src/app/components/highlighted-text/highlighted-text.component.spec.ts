import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightedTextComponent } from './highlighted-text.component';
import { inputBinding } from '@angular/core';

describe('HighlightedTextComponent', () => {
  let component: HighlightedTextComponent;
  let fixture: ComponentFixture<HighlightedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightedTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightedTextComponent, {
      bindings: [inputBinding('highlightTerm', () => ''), inputBinding('text', () => '')],
    });
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
