import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowOrdersPageRoutingModule } from './show-orders-routing.module';

import { ShowOrdersPage } from './show-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowOrdersPageRoutingModule
  ],
  declarations: [ShowOrdersPage]
})
export class ShowOrdersPageModule {}
