import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../../httpservice.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  myEmpform: FormGroup;

  id: FormControl;
  name: FormControl;
  location: FormControl;

  constructor(
    private http: HttpClient,
    private _httpService: HttpService,
    private router: Router
  ) { }

  createForm() {
    this.myEmpform = new FormGroup({
      id: this.id,
      name: this.name,
      location: this.location,
    });
  }

  createFormControls() {
    this.id = new FormControl("", Validators.required);
    this.name = new FormControl("", Validators.required);
    this.location = new FormControl("", Validators.required);
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.myEmpform.valid) {
      let response = this._httpService.addEmployee(this.myEmpform.value);
      if(response['success']) {
        this.myEmpform.reset();
        this.router.navigate(['employees']);
      } else {

      }
    }
  }
}
