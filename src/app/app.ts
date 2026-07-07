import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Square } from './square/square';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Square],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Tic-Tac-Toe');
}
