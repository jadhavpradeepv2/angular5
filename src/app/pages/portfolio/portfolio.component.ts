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

  title:string = 'Angular 4 Project!';
  todaydate:Date = new Date();
  jsonval:any = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  constructor() { }

  ngOnInit() {
    this.listCount = this.inputList.length;
  }

  AddInput() {
    if(this.inputText != '' ) {
      this.inputList.push(this.inputText);
      this.inputText = '';
      this.listCount = this.inputList.length;
    }
  }
}
