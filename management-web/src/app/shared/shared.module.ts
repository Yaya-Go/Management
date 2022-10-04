import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AppTableComponent } from './app-table/app-table.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AddDialogComponent,
    AppTableComponent,
    AddButtonComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    AppTableComponent,
    AddButtonComponent,
    MatSelectModule
  ],
  entryComponents: [
    AddDialogComponent
  ]
})
export class SharedModule { }
