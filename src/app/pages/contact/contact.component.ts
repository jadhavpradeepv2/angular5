import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  routeToHomepage(){
    this.router.navigate(['homepage']);
  }

}
