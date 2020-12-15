import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { profilemodel } from '../Models/profile.model';

@Injectable()
export class ProfileService {
  data: profilemodel[] = [
    {
      id: 1,
      Fname: 'فاخته',
      lname: 'حبیب زاده',
      Nationalcode: '0080887093',
      Mobile: '09128765434',
      Address: 'تهران ',
      StockerNo: 10000033683,
      PersonelNo: 89010394,
      CompanyName: 'تعاونی خاص',
    },
  ];
  constructor(private loadingcrl: LoadingController) {}
  getprofile(): Observable<profilemodel[]> {
    return Observable.create((observer) => {
      observer.next(this.data),
        // observer.error({ status: 500, message: 'error !!!!!!!!' }),
        observer.complete({});
    });
  }
}
