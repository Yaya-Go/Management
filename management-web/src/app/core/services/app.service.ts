import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AddModel } from 'src/app/app-config.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AppService extends BaseService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    super();
  }
  login(email: string, password: string) {
    return this.http.post(this.LoginPath, { email, password });
  }
  register(email: string, password: string) {
    return this.http.post(this.SignupPath, { email, password });
  }
  logout() {
    localStorage.removeItem('token');
    return this.router.navigateByUrl('/login');
  }
  summary(year?: number) {
    return this.http.get(this.SummaryPath(year));
  }
  add(type: string, item: AddModel) {
    return this.http.post(this.AddPath(type), item);
  }
  list(type: string, year?: number) {
    return this.http.get(this.ListPath(type, year));
  }
  listItemByTrans(transId: string) {
    return this.http.get(this.ItemListByTrans(transId));
  }
  listItemBySeller(sellerId: string) {
    return this.http.get(this.ItemListBySeller(sellerId));
  }
  delete(type: string, id: string) {
    return this.http.delete(this.DeletePath(type, id));
  }
}
