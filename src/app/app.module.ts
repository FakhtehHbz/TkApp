import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './auth/core.module';
import { AuthService } from './auth/auth.service';

import { AuthGuard } from './shared/Guards/auth.guard';
import { SettingService } from './shared/Services/setting.service';
import { CapitalService } from './shared/Services/capital.service';
import { ApiService } from './shared/Services/api.service';
import { ProfileService } from './shared/Services/profile.service';
import { LoanService } from './shared/Services/loan.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ApiService,
    AuthGuard,
    SettingService,
    CapitalService,
    ProfileService,
    LoanService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
