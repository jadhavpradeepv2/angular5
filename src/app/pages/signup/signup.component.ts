import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
//import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private signupUrl = 'http://localhost:3000/v1/users';
  myform: FormGroup;

  genders: string[] = [
    'Male',
    'Female',
    'Other',
  ];
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  gender: FormControl;
  username: FormControl;
  phoneNumber: FormControl;
  age: FormControl;

  constructor(private http: HttpClient) { }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      gender: this.gender,
      username: this.username,
      phoneNumber: this.phoneNumber,
      age: this.age
    });
  }

  createFormControls() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
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
    this.phoneNumber = new FormControl("");
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      this.doPOST(this.myform.value);
      this.myform.reset();
    }
  }

  doPOST(data) {
    let isJsonResponse = true;
    let url = `${this.signupUrl}`;
    return this.http.post(url, data, { headers: new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded" }) });
  }
}
