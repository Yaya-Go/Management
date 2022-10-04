import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  private whiteList = [
    '/login',
    '/register'
  ];

  constructor(
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    if (this.whiteList.indexOf(this.router.url) === -1) {
        request = request.clone({
            setHeaders: {
              authorization: `YYGo-Management ${ token }`
            }
          });
    }
      
    return next.handle(request);
  }
}
