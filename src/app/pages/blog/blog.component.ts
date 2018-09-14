import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employees';
import { HttpService } from '../../httpservice.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  employees: Employee[];
  empId: number;
  emp;

  constructor( private httpService: HttpService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.empId = params.id );
    console.log(this.empId);
  }

  ngOnInit() {
    this.httpService.empList.subscribe(list => this.employees = list);

    this.emp =  this.employees.filter(emp => emp.id == this.empId)[0];
    console.log(this.emp);
  }

}
