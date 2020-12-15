import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuard } from './shared/Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tab-bar/tab-bar.module#TabBarPageModule',
  },
  {
    path: 'capital',
    loadChildren: './capital/capital.module#CapitalPageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'default',
    loadChildren: './default/default.module#DefaultPageModule',
  },
  {
    path: 'tab-bar',
    loadChildren: () =>
      import('./tab-bar/tab-bar.module').then((m) => m.TabBarPageModule),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },  {
    path: 'loan',
    loadChildren: () => import('./loan/loan.module').then( m => m.LoanPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    OAuthModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
