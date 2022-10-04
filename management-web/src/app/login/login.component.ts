import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { login } from '../store/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { 
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(login(this.loginForm.value));
    }
  }

}
