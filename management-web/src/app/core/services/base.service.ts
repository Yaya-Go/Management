import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected readonly API = environment.api;
  protected readonly LoginPath = `${ this.API }/login`;
  protected readonly SignupPath = `${ this.API }/register`;
  protected readonly SummaryPath = (year?: number) => `${ this.API }/summary/${ year ? year : new Date().getFullYear() }`;
  protected readonly AddPath = (type: string) => `${ this.API }/add/${ type }`;
  protected readonly ListPath = (type: string, year?: number) => `${ this.API }/list/${ type }/${ year ? year : new Date().getFullYear() }`;
  protected readonly ItemListBySeller = (sellerId: string) => `${ this.API }/item/list/seller/${ sellerId }`;
  protected readonly ItemListByTrans = (transId: string) => `${ this.API }/item/list/transaction/${ transId }`;
  protected readonly RetrievePath = (type: string, id: string) => `${ this.API }/retrieve/${ type }/${ id }`;
  protected readonly PutPath = (type: string, id: string) => `${ this.API }/put/${ type }/${ id }`;
  protected readonly ItemUpdatePath = (id: string) => `${ this.API }/item/update/${ id }`;
  protected readonly DeletePath = (type: string, id: string) => `${ this.API }/delete/${ type }/${ id }`;
  constructor() { }
}
