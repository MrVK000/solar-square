import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  border: boolean = true;
  result: boolean = false;
  bgColorArray: any = [];
  iStart: number = 0;
  iEnd: number = 4;
  jStart: number = 0;
  jEnd: number = 4;

  ngOnInit() {
    this.arrayGenerateFunc();
  }

  arrayGenerateFunc() {
    this.iStart = 0; this.iEnd = 4; this.jStart = 0; this.jEnd = 4; this.bgColorArray = []; this.border = true;
    for (let i = this.iStart; i < this.iEnd; i++) {
      this.bgColorArray[i] = [];
      for (let j = this.jStart; j < this.jEnd; j++) {
        this.bgColorArray[i][j] = false;
      }
    }
  }

  gridFunc() {
    let zzz = `grid-template-columns: repeat(${this.jEnd}, 34px);grid-template-rows: repeat(${this.iEnd}, 32px)`;
    return zzz;
  }

  clickFunc(i: number, j: number) {
    if (this.result === false) {
      this.bgColorArray[i][j] = !this.bgColorArray[i][j];
      if (i == this.iStart && j != this.jStart && j != this.jEnd - 1) {
        this.iEnd += 1;
        let addElement: boolean[] = [];
        for (let i = 0; i < this.jEnd; i++) {
          addElement.push(false);
        }
        this.bgColorArray = [addElement, ...this.bgColorArray];
      }
      else if (i == this.iEnd - 1 && j != this.jStart && j != this.jEnd - 1) {
        this.iEnd += 1;
        let addElement: boolean[] = [];
        for (let i = 0; i < this.jEnd; i++) {
          addElement.push(false);
        }
        this.bgColorArray = [...this.bgColorArray, addElement];
      }
      else if (j == this.jStart && i !== this.iStart && i !== this.iEnd - 1) {
        this.jEnd += 1;
        this.bgColorArray.forEach((arr: boolean[], i: number) => {
          this.bgColorArray[i] = [false, ...this.bgColorArray[i]];
        })
      }
      else if (j == this.jEnd - 1 && i !== this.jStart && i != this.iEnd - 1) {
        this.jEnd += 1;
        this.bgColorArray.forEach((arr: boolean[], i: number) => {
          this.bgColorArray[i] = [...this.bgColorArray[i], false];
        })
      }
      else if (i === this.iStart && j === this.jStart) {
        this.jEnd += 1;
        this.iEnd += 1;
        this.bgColorArray.forEach((arr: boolean[], i: number) => {
          this.bgColorArray[i] = [false, ...this.bgColorArray[i]];
        })
        let addElement: boolean[] = [];
        for (let i = 0; i < this.jEnd; i++) {
          addElement.push(false);
        }
        this.bgColorArray = [addElement, ...this.bgColorArray];
      }
      else if (i === this.iStart && j === this.jEnd - 1) {
        this.jEnd += 1;
        this.iEnd += 1;
        this.bgColorArray.forEach((arr: boolean[], i: number) => {
          this.bgColorArray[i] = [...this.bgColorArray[i], false];
        })
        let addElement: boolean[] = [];
        for (let i = 0; i < this.jEnd; i++) {
          addElement.push(false);
        }
        this.bgColorArray = [addElement, ...this.bgColorArray];
      }
      else if (i === this.iEnd - 1 && j === this.jStart) {
        this.jEnd += 1;
        this.iEnd += 1;
        this.bgColorArray.forEach((arr: boolean[], i: number) => {
          this.bgColorArray[i] = [false, ...this.bgColorArray[i]];
        })
        let addElement: boolean[] = [];
        for (let i = 0; i < this.jEnd; i++) {
          addElement.push(false);
        }
        this.bgColorArray = [...this.bgColorArray, addElement];
      }
      else if (i === this.iEnd - 1 && j === this.jEnd - 1) {
        this.jEnd += 1;
        this.iEnd += 1;
        this.bgColorArray.forEach((arr: boolean[], i: number) => {
          this.bgColorArray[i] = [...this.bgColorArray[i], false];
        })
        let addElement: boolean[] = [];
        for (let i = 0; i < this.jEnd; i++) {
          addElement.push(false);
        }
        this.bgColorArray = [...this.bgColorArray, addElement];
      }
    }
  }
}
