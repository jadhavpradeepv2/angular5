import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  parentMessage: string = "that express yourself";
  anythingText: string;
  childMessage: string;
  message:  string;

  @ViewChild(ChildComponentComponent) child;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  ngAfterViewInit() {

  }

  submit(){
    this.parentMessage = this.anythingText;
  }

  receiveMessage($event) {
    this.childMessage = $event;
  }
}
