import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestCsOrderPageRoutingModule } from './test-cs-order-routing.module';

import { TestCsOrderPage } from './test-cs-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCsOrderPageRoutingModule
  ],
  declarations: [TestCsOrderPage]
})
export class TestCsOrderPageModule {}
