import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TYPES } from './app-config.model';
import { ResizeService } from './core/utils/resize.service';
import { listItem } from './store/actions/list.action';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { summary } from './store/app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YaYa-Go Management';
  token: string | null;

  get isMobile() {
    return this.resizeService.isMobile;
  }

  constructor(
    private resizeService: ResizeService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.store.dispatch(summary());
    this.token = localStorage.getItem('token');
    if (!this.token) {
      this.router.navigateByUrl('/login');
    }
  }

}
