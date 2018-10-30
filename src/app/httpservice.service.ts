import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employees';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  results: any;

  employees = [
    new Employee(1, 'Amol', "Panvel"),
    new Employee(2, 'Baban', "Vashi"),
    new Employee(3, 'Charley', "Nerul"),
    new Employee(4, 'Don', "Kalamboli"),
    new Employee(5, 'Suman', "Kharghar"),
    new Employee(6, 'Prakash', "kamothe")
  ];
  constructor(private http: HttpClient) { }

  private empSource = new BehaviorSubject(this.employees);
  empList = this.empSource.asObservable();
  
  addEmployee(data) {
    let response;
    if(this.employees.push(new Employee(data.id, data.name, data.location))) {
      response['success'] = true;
      return response;
    }
    else {
      response['success'] = false;
      return response;
    }
  }

  doPOST(data) {
    let body = {
        username  : data.username,
        password  : data.password,
        fname     : data.name.fname,
        lname     : data.name.lname,
        email     : data.email,
        phone     : data.phone,
        gender    : data.gender,
        age       : data.age,
    };

    let url = environment.config.baseURL + "users";

    this.http.post(url, body).
    subscribe(
      data => {
        if (data['success']) {
          console.log("success");
          return data;
        } else {
          console.log("Failed to create User");
          return false;
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        //error(err.error.message);
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        //error(err.error);
        }
      //reject(err.error); 
      });
  }

  doSignIn(data) {
    let url = environment.config.baseURL + "users/login";

    let promise = new Promise((resolve, reject) => {
      return this.http.post(url, data)
      .subscribe(
        data => {
          if (data['success']) {
            console.log("success");
            localStorage.setItem('userToken', data['token']);
            resolve(data);
          } else {
            console.log("Failed to login User");
            reject(data);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
          //error(err.error.message);
          } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          //error(err.error);
          }
        reject(err.error);
      });
    });

    return promise;
  }

}