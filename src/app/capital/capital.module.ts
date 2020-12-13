import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapitalPageRoutingModule } from './capital-routing.module';

import { CapitalPage } from './capital.page';
import { FaNumPipe, IRCurrencyPipe } from 'ngx-persian';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CapitalPageRoutingModule],
  declarations: [CapitalPage, FaNumPipe, IRCurrencyPipe],
})
export class CapitalPageModule {}
