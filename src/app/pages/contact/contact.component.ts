import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  showTemplate: boolean = true;

  items = [{
    name: 'Pradeep',
    age : 30
  },
  {
    name : 'Akash',
    age : 32
  },
  {
    name : 'Sandeep',
    age : 16
  }];
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  routeToHomepage(){
    this.router.navigate(['homepage']);
  }

}
