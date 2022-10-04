export enum TYPES {
  A = 'accounts',
  C = 'categories',
  I = 'items',
  IN = 'income',
  S = 'sellers',
  T = 'transactions',
}

export const AddConfigList = [
  {
    name: 'Add Account',
    type: TYPES.A
  },
  {
    name: 'Add Category',
    type: TYPES.C
  },
  {
    name: 'Add Seller',
    type: TYPES.S
  },
  {
    name: 'Add Transaction',
    type: TYPES.T
  },
  {
    name: 'Add Income',
    type: TYPES.IN
  }
];

export interface AddModel {
  name: string;
  date?: string;
  seller?: string;
  category?: string;
  account?: string;
  amount?: number;
  rates?: number;
  description?: string;
}

export const SidenavList = [
  {
    name: 'Transactions',
    path: 'transactions'
  },
  {
    name: 'Sellers',
    path: 'sellers'
  },
  {
    name: 'Categories',
    path: 'categories'
  },
  {
    name: 'Accounts',
    path: '/accounts'
  },
  {
    name: 'Income',
    path: 'income'
  }
];
