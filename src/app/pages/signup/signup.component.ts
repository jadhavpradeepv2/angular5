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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myform: FormGroup;

  genders: string[] = [
    'Male',
    'Female',
    'Other',
  ];
  fname: FormControl;
  lname: FormControl;
  email: FormControl;
  password: FormControl;
  gender: FormControl;
  username: FormControl;
  phone: FormControl;
  age: FormControl;

  constructor(
    private http: HttpClient,
    private _httpService: HttpService,
    private router: Router
  ) { }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        fname: this.fname,
        lname: this.lname,
      }),
      email: this.email,
      password: this.password,
      gender: this.gender,
      username: this.username,
      phone: this.phone,
      age: this.age
    });
  }

  createFormControls() {
    this.fname = new FormControl("", Validators.required);
    this.lname = new FormControl("", Validators.required);
    this.username = new FormControl("", Validators.required);
    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.age = new FormControl("");
    this.gender = new FormControl("");
    this.phone = new FormControl("");
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.myform.valid) {
      let response = this._httpService.doPOST(this.myform.value);
      if(response['success']) {
        this.myform.reset();
        this.router.navigate(['homepage']);
      } else {

      }
    }
  }
}
