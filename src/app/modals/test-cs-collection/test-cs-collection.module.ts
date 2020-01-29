import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestCsCollectionPageRoutingModule } from './test-cs-collection-routing.module';

import { TestCsCollectionPage } from './test-cs-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCsCollectionPageRoutingModule
  ],
  declarations: [TestCsCollectionPage]
})
export class TestCsCollectionPageModule {}
