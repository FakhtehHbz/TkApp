import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LoanModel } from '../Models/loan.model';

@Injectable()
export class LoanService {
  data: LoanModel[] = [
    {
      contractnumber: 98010250,
      countdelayed: 3,
      price: 1000000,
      RemainDebt: 50000,
      ProtocolName: 'بیمه بدنه',
    },
  ];
  constructor(private loadingcrl: LoadingController) {}
  getloanlist(): Observable<LoanModel[]> {
    return Observable.create((observer) => {
      observer.next(this.data),
        // observer.error({status:500,message:'error !!!!!!!!'}),
        observer.complete({});
    });
  }
}
