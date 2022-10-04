import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(catchError(err => {
        console.log(err)
        if (err.status === 401 || (err.error && err.error.error && err.error.error.code === 'auth/id-token-expired')) {
          this.router.navigateByUrl('/login');
        }
        return throwError(err);
      }));
  }
}
