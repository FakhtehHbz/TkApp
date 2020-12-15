import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarPage } from './tab-bar.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabBarPage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule',
          },
        ],
      },
      {
        path: 'capital',
        children: [
          {
            path: '',
            loadChildren: '../capital/capital.module#CapitalPageModule',

            /* loadChildren: () =>
              import('../capital/capital.module').then(
                (m) => m.CapitalPageModule
              ),*/
          },
        ],
      },
      {
        path: 'default',
        children: [
          {
            path: '',
            loadChildren: '../default/default.module#DefaultPageModule',

            /*loadChildren: () =>
              import('../default/default.module').then(
                (m) => m.DefaultPageModule
              ),*/
          },
        ],
      },
      {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule {}
