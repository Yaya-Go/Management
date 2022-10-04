import { Component, OnInit } from '@angular/core';
import { AddConfigList } from '../app-config.model';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { summary } from '../store/app.action';
import { getSummary } from '../store/app.selector';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addList = AddConfigList;
  summary: any;

  constructor(
    private store: Store<AppState>
  ) { 
    // this.store.dispatch(summary());
    this.store.select(getSummary)
      .pipe(filter(val => val !== undefined && val !== null))
      .subscribe(summary => this.summary = summary);
  }

  ngOnInit(): void {
    
  }

}
