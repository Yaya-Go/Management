import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transaction/transaction.module').then((m) => m.TransactionModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./account/account.module').then((m) => m.AccountModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule)
  },
  {
    path: 'sellers',
    loadChildren: () => import('./seller/seller.module').then((m) => m.SellerModule)
  },
  {
    path: 'income',
    loadChildren: () => import('./income/income.module').then((m) => m.IncomeModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
