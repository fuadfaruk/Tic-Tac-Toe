import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button type="button" [class]="'square' + (value === 'X' ? ' is-x' : value === 'O' ? ' is-o' : '')" (click)="selected.emit()">
      {{ value || '' }}
    </button>
  `,
  styles: [
    `
      .square {
        width: 100%;
        aspect-ratio: 1 / 1;
        font-size: 3.6rem;
        font-weight: 800;
        color: #ffffff;
        border-radius: 6px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 200ms ease, transform 120ms ease, box-shadow 120ms ease;
        box-shadow: 0 4px 0 rgba(0,0,0,0.15), inset 0 0 0 3px rgba(0,0,0,0.06);
        /* Empty tile: purple */
        background: #8b78e6;
      }

      /* X tile: green */
      .square.is-x {
        background: #2ec47e;
      }

      /* O tile: blue */
      .square.is-o {
        background: #4a9fe8;
      }

      /* Hover: brighten empty tiles prominently */
      .square:not(.is-x):not(.is-o):hover {
        background: #a28ff0;
        box-shadow: 0 6px 0 rgba(0,0,0,0.18), inset 0 0 0 3px rgba(255,255,255,0.12);
        transform: translateY(-2px);
      }

      /* Hover: subtle brightness on already-marked tiles */
      .square.is-x:hover {
        background: #3dd98e;
        cursor: default;
      }

      .square.is-o:hover {
        background: #62b0f0;
        cursor: default;
      }

      .square:active {
        transform: translateY(3px);
        box-shadow: 0 1px 0 rgba(0,0,0,0.15);
      }
    `
  ]
})
export class Square {
  @Input() value: 'X' | 'O' | null = null;
  @Output() selected = new EventEmitter<void>();
}
