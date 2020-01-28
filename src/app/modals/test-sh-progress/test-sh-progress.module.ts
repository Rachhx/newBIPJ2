import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestShProgressPageRoutingModule } from './test-sh-progress-routing.module';

import { TestShProgressPage } from './test-sh-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestShProgressPageRoutingModule
  ],
  declarations: [TestShProgressPage]
})
export class TestShProgressPageModule {}
