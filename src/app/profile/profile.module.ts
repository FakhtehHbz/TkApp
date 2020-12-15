import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { FaNumPipe, IRCurrencyPipe } from 'ngx-persian';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProfilePageRoutingModule],
  declarations: [ProfilePage, FaNumPipe, IRCurrencyPipe],
})
export class ProfilePageModule {}
