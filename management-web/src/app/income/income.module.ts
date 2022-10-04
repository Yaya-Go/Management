import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './income.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IncomeComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule,
    SharedModule
  ]
})
export class IncomeModule { }
