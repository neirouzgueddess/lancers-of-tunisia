import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninregisterPage } from './signinregister.page';

const routes: Routes = [
  {
    path: '',
    component: SigninregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninregisterPageRoutingModule {}
