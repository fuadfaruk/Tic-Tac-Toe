import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <p>
    {{ rando() }}
  </p> `,
  styles: [],
})
export class Square {
  rando = signal<number>(0);

  constructor() {
    setInterval(() => this.rando.set(Math.random()), 500);
  }
}
