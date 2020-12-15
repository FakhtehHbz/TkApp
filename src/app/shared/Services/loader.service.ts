import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private loadingController: LoadingController) {}

  async loadingPresent(message: string = null, duration: number = null) {
    const loading = await this.loadingController.create({
      message,
      duration,
      cssClass: 'loader',
      spinner: 'lines-small',
    });
    return await loading.present();
  }

  async loadingDismiss() {
    setTimeout(() => {
      return this.loadingController.dismiss();
    }, 1000);
  }
}
