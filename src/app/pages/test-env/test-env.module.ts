import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestEnvPageRoutingModule } from './test-env-routing.module';

import { TestEnvPage } from './test-env.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestEnvPageRoutingModule
  ],
  declarations: [TestEnvPage]
})
export class TestEnvPageModule {}
