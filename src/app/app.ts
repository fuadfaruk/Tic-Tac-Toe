import { Component, signal } from '@angular/core';
import { Board } from './board/board';

@Component({
  selector: 'app-root',
  imports: [Board],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Tic-Tac-Toe');
}
