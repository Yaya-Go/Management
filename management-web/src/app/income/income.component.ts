import { Component, OnInit } from '@angular/core';
import { TYPES } from '../app-config.model';
import { listItem } from '../store/actions/list.action';
import { AppState } from '../store/app.reducer';
import { getIncome } from '../store/selectors/list.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  fields = ['name', 'date', 'seller', 'amount'];
  cateList$ = this.store.select(getIncome);

  constructor(
    private store: Store<AppState>
  ) { 
    this.store.dispatch(listItem(TYPES.IN));
  }

  ngOnInit(): void {
  }

}
