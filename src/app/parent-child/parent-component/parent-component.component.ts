import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  parentMessage: string = "that express yourself";
  anythingText: string;
  childMessage: string;

  @ViewChild(ChildComponentComponent) child;

  constructor() { }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   this.childMessage = this.child.message;
  // }

  submit(){
    this.parentMessage = this.anythingText;
  }

  receiveMessage($event) {
    this.childMessage = $event;
  }
}
