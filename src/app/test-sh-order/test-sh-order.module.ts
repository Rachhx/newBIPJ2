import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestShOrderPageRoutingModule } from './test-sh-order-routing.module';

import { TestShOrderPage } from './test-sh-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestShOrderPageRoutingModule
  ],
  declarations: [TestShOrderPage]
})
export class TestShOrderPageModule {}
