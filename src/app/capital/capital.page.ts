import { Component, OnInit } from '@angular/core';
import { CapitalService } from '../shared/Services/capital.service';
import { CapitalModel } from '../shared/Models/capital.model';
import { SegmentChangeEventDetail } from '@ionic/core';
import { error } from 'console';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoaderService } from '../shared/Services/loader.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.page.html',
  styleUrls: ['./capital.page.scss'],
})
export class CapitalPage implements OnInit {
  layout = 'capital';
  capitalInfo: CapitalModel[];
  constructor(
    private capitalservice: CapitalService,
    private alertController: AlertController,
    private loadingcrl: LoadingController,
    private Loader: LoaderService
  ) {}
  errorMessage: string;
  ngOnInit() {
    //this.presentAlert();
    /* this.capitalservice.getCapitalInfo().subscribe((p: CapitalModel[]) => {
      this.capitalInfo = p.data;
    });*/

    this.capitalservice.getcapitalinfo().subscribe(
      (data: CapitalModel[]) => {
        this.Loader.loadingPresent('بارگذاری اطلاعات ... ');
        this.capitalInfo = data;
        this.Loader.loadingDismiss();
      },
      (error) => {
        // this.errorMessage = error.message;
        //this.presentAlert();
        console.log(error);
        // this.ionLoader.hideLoader();
      },
      () => {}
    );
  }
  changeStockerCapital(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value === 'capital') {
      console.log('capital');
    } else {
      console.log('facilityGuarantee');
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'خطا',
      // subHeader: 'Subtitle',
      message: 'خطا در دریافت اطلاعات',
      buttons: [
        {
          text: 'تلاش مجدد',
          handler: () => {
            this.capitalservice.getcapitalinfo().subscribe(
              (data: CapitalModel[]) => {
                this.capitalInfo = data;
                alert.dismiss();
              },
              (error) => {
                this.presentAlert();
              }
            );
          },
        },
        {
          text: 'انصراف',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }
}
