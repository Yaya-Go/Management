import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TYPES } from '../app-config.model';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { listCategory } from '../store/app.action';
import { getCategories } from '../store/app.selector';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  type = TYPES.C;
  categoryList$: Observable<any>;
  fields = ['name'];
  constructor(
    private store: Store<AppState>
  ) { 
    this.store.dispatch(listCategory());
  }

  ngOnInit(): void {
    this.categoryList$ = this.store.select(getCategories);
  }

}
