import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestCsPageRoutingModule } from './test-cs-routing.module';

import { TestCsPage } from './test-cs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCsPageRoutingModule
  ],
  declarations: [TestCsPage]
})
export class TestCsPageModule {}
