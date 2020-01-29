import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestShPageRoutingModule } from './test-sh-routing.module';

import { TestShPage } from './test-sh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestShPageRoutingModule
  ],
  declarations: [TestShPage]
})
export class TestShPageModule {}
