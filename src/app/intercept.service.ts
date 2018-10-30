import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const dummyReq = req.clone({
      setHeaders: {
        'AuthKey': '12345', 'DeviceID': '85645',
        'content-type': 'application/json'
      }
    })
    console.log("Cloned Request");
    console.log(dummyReq);
    return next.handle(dummyReq);
  }
}
