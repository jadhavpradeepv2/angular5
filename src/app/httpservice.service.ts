import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  
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

}