import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninregisterPageRoutingModule } from './signinregister-routing.module';

import { SigninregisterPage } from './signinregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninregisterPageRoutingModule
  ],
  declarations: [SigninregisterPage]
})
export class SigninregisterPageModule {}
