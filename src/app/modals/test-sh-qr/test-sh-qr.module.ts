import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestShQRPageRoutingModule } from './test-sh-qr-routing.module';

import { TestShQRPage } from './test-sh-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestShQRPageRoutingModule
  ],
  declarations: [TestShQRPage]
})
export class TestShQRPageModule {}
