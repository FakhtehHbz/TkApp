import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
