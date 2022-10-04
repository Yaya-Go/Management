import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TYPES } from '../app-config.model';
import { listAccount } from '../store/app.action';
import { getAccounts } from '../store/app.selector';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  type = TYPES.A;
  accountList$ = this.store.select(getAccounts);
  fields = ['name'];
  constructor(
    private store: Store<AppState>
  ) { 
    this.store.dispatch(listAccount());
    this.accountList$.subscribe(val => { console.log(val) })
  }

  ngOnInit(): void {
    
  }

}
