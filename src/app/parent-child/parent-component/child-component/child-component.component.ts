import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() messageToChild:  string;
  message = 'Child says via ViewChild.';
  messageFromChild = 'Child says via Output.';

  @Output() messageToparent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    this.messageToparent.emit(this.messageFromChild);
  }
}
