import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { HttpService } from '../../httpservice.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinform: FormGroup;

  username: FormControl;
  password: FormControl;

  constructor(
    private _httpService: HttpService,
    private router: Router
  ) { }

  createForm() {
    this.signinform = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  createFormControls() {
    this.username = new FormControl("", Validators.required);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.signinform.valid) {
      let response = this._httpService.doSignIn(this.signinform.value);
      response.then((res) => {
        this.signinform.reset();
        this.router.navigate(['homepage']);
        console.log("Login form submission success");
      }).catch((err) => {
        console.log("Login form submit error");
      });
    }
  }

}
