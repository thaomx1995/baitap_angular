import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-number-component',
  templateUrl: './game-number-component.component.html',
  styleUrls: ['./game-number-component.component.css']
})
export class GameNumberComponentComponent implements OnInit {

   isPlayingGame: boolean = false;
   next: number = 1;
   point: number = 0;
   numbers: number[] = [];
   timeleft: number = 0;
   timeStart: any = false;
   maxTime: number = 100;
  show: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.timeleft = this.maxTime;
    for (let i = 1; i <= 50; i++) {
      this.numbers.push(i);
      //xao tron mang
      this.numbers = this.shuffle(this.numbers);
    }
  }
  ngDoCheck(): void {
    if (this.isPlayingGame == true) {
      if (!this.timeStart) {
        this.timeStart = setInterval(() => {
          this.timeleft--;
        }, 1000);
      }
    }
    if (this.isPlayingGame == true) {
      if (this.timeleft <= 0) {
        this.resetGame();
      }
    }
  }
  public playGame() {
    this.isPlayingGame = true;
  }


  win(): void {
    alert('You win!');
    this.resetGame();
  }
  public resetGame() {
    let a = alert(`Game Over ${this.point}`);
    this.isPlayingGame = false;
    this.next = 1;
    this.point = 0;
    this.timeleft = this.maxTime;
    clearInterval(this.timeStart);
    this.timeStart = null;
  }
  play(number: number): void {
    if (number == this.next) {
      this.next++;
      this.point++;
      this.numbers = this.shuffle(this.numbers);
      if (this.point == 100) {
        this.win();
      }
    } else {
      this.resetGame();
    }
  }
  shuffle(array: any) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

}
