import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CapitalModel } from '../Models/capital.model';
import { Injectable } from '@angular/core';
@Injectable()
export class CapitalService {
  data: CapitalModel[] = [
    {
      block: 100000,
      unblock: 300000,
      capital: 10000000,
      stockerno: 10000033683,
      membership: 300000,
      year: 1399,
      profit: 13000,
    },
  ];

  constructor(private apiService: ApiService) {}

  getCapitalInfo(): Observable<CapitalModel[]> {
    return this.apiService.get('v1/product');
  }

  getcapitalinfo(): Observable<CapitalModel[]> {
    return Observable.create((observer) => {
      observer.next(this.data);
      // observer.error({ message: 'error!!!!!!' });
      observer.complate({});
    });
  }
}
