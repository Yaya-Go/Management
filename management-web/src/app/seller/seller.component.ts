import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { listItem } from '../store/actions/list.action';
import { TYPES } from '../app-config.model';
import { getSellers } from '../store/selectors/list.selector';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  fields = ['name', 'address', 'rates', 'descriptions']
  sellerList$ = this.store.select(getSellers);

  constructor(
    private store: Store<AppState>
  ) { 
    this.store.dispatch(listItem(TYPES.S));
  }

  ngOnInit(): void {
  }

}
