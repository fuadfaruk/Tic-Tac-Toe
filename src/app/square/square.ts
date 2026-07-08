import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button type="button" class="square" (click)="selected.emit()">
      {{ value || '' }}
    </button>
  `,
  styles: [
    `
      .square {
        width: 100%;
        aspect-ratio: 1 / 1;
        font-size: 3rem;
        font-weight: 700;
        border: 1px solid #999;
        background: #f5f5f5;
        cursor: pointer;
      }
    `
  ]
})
export class Square {
  @Input() value: 'X' | 'O' | null = null;
  @Output() selected = new EventEmitter<void>();
}
