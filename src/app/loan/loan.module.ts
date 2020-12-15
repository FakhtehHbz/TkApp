import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanPageRoutingModule } from './loan-routing.module';

import { LoanPage } from './loan.page';
import { FaNumPipe, IRCurrencyPipe } from 'ngx-persian';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoanPageRoutingModule],
  declarations: [LoanPage, FaNumPipe, IRCurrencyPipe],
})
export class LoanPageModule {}
