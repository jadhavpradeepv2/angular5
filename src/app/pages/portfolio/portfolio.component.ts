import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  listCount: number;
  btnText: string = "Click Me";
  inputText: string = "Enter any text";
  inputList = [];

  constructor() { }

  ngOnInit() {
    this.listCount = this.inputList.length;
  }

  AddInput() {
    this.inputList.push(this.inputText);
    this.inputText = '';
    this.listCount = this.inputList.length;
  }
}
