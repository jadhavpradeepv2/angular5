import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../httpservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'Tour of Employees';
  employees;
  
  constructor( private httpService: HttpService ) { }
  
  ngOnInit() {
    this.httpService.empList.subscribe(list => this.employees = list);
  }

  routeToEmp() {
    
  }
}
