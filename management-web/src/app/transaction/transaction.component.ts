import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { listItem } from '../store/actions/list.action';
import { TYPES } from '../app-config.model';
import { getTransactions } from '../store/selectors/list.selector';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  type = TYPES.T;
  fields = ['name', 'date', 'seller', 'account', 'amount'];
  transList$ = this.store.select(getTransactions);

  constructor(
    private store: Store<AppState>
  ) { 
    this.store.dispatch(listItem(TYPES.T));
  }

  ngOnInit(): void {
  }

}
