import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  mark: string = 'X';
  message: string = 'Sıradaki X';
  games: string[] = ['', '', '', '', '', '', '', '', ''];
  gameOver: boolean = false;

  constructor() {
    this.newGame();
  }
  setMark(index: number) {
    if (this.games[index] == '' && !this.gameOver) {
      this.games[index] = this.mark;
      this.isGameOver();
      if (this.gameOver) {
        this.message = 'Oyun bitti. Kazanan: ' + this.mark;
      } else {
        if (this.mark == 'X') {
          this.mark = 'O';
        } else {
          this.mark = 'X';
        }
        this.message = `Sıradaki ${this.mark}`;
      }
    }
  }

  newGame() {
    this.mark = 'X';
    this.message = 'Sıradaki X';
    this.games = ['', '', '', '', '', '', '', '', ''];
    this.gameOver = false;
  }

  isGameOver() {
    if (
      this.games[0] != '' &&
      this.games[0] === this.games[1] &&
      this.games[1] === this.games[2]
    ) {
      this.gameOver = true;
    }

    if (
      this.games[3] != '' &&
      this.games[3] === this.games[4] &&
      this.games[4] === this.games[5]
    ) {
      this.gameOver = true;
    }

    if (
      this.games[6] != '' &&
      this.games[6] === this.games[7] &&
      this.games[7] === this.games[8]
    ) {
      this.gameOver = true;
    }
    if (
      this.games[0] != '' &&
      this.games[0] === this.games[3] &&
      this.games[3] === this.games[6]
    ) {
      this.gameOver = true;
    }
    
    if (
      this.games[1] != '' &&
      this.games[1] === this.games[4] &&
      this.games[4] === this.games[7]
    ) {
      this.gameOver = true;
    }
    
    if (
      this.games[2] != '' &&
      this.games[2] === this.games[5] &&
      this.games[5] === this.games[8]
    ) {
      this.gameOver = true;
    }
    
    if (
      this.games[0] != '' &&
      this.games[0] === this.games[4] &&
      this.games[4] === this.games[8]
    ) {
      this.gameOver = true;
    }
    if (
      this.games[2] != '' &&
      this.games[2] === this.games[4] &&
      this.games[4] === this.games[6]
    ) {
      this.gameOver = true;
    }
  }
}
