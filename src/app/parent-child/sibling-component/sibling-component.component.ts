import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling-component',
  templateUrl: './sibling-component.component.html',
  styleUrls: ['./sibling-component.component.css']
})
export class SiblingComponentComponent implements OnInit {

  message:string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.dataService.changeMessage("Hello from Sibling Component")
  }
}
