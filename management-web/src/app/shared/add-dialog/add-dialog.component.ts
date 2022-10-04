import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TYPES } from 'src/app/app-config.model';
import { getSellers } from 'src/app/store/selectors/list.selector';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getAccounts, getCategories } from 'src/app/store/app.selector';

@Component({
  selector: 'add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  TYPES = TYPES;
  type: string;
  addForm: FormGroup;

  accList$ = this.store.select(getAccounts);
  cateList$ = this.store.select(getCategories);
  sellerList$ = this.store.select(getSellers);

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>
  ) {
    this.type = data.type;
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      date: [''],
      seller: [''],
      rates: [''],
      category: [''],
      account: [''],
      amount: [''],
      address: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  showDate() {
    return this.data.type === TYPES.T;
  }
  showSeller() {
    return this.data.type === TYPES.T;
  }
  showCategory() {
    return this.data.type === TYPES.S;
  }
  showAmount() {
    return [TYPES.T, TYPES.IN, TYPES.I].includes(this.data.type);
  }
  showAccount() {
    return [TYPES.T, TYPES.IN].includes(this.data.type);
  }
  showDesc() {
    return [TYPES.S, TYPES.I].includes(this.data.type);
  }
  showRates() {
    return [TYPES.S, TYPES.I].includes(this.data.type);
  }
  showAddress() {
    return this.data.type === TYPES.S;
  }
}
