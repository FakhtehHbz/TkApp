import { Component, OnInit } from '@angular/core';
import { LoanService } from '../shared/Services/loan.service';
import { LoanModel } from '../shared/Models/loan.model';
import { data } from 'jquery';
import { error } from 'console';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoaderService } from '../shared/Services/loader.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {
  loanlist: LoanModel[];
  constructor(
    private LoanService: LoanService,
    private alertController: AlertController,
    private loadingcrl: LoadingController,
    private Loader: LoaderService
  ) {}

  ngOnInit() {
    this.LoanService.getloanlist().subscribe(
      (data: LoanModel[]) => {
        this.Loader.loadingPresent('بارگذاری اطلاعات ... ');
        this.loanlist = data;
        this.Loader.loadingDismiss();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
