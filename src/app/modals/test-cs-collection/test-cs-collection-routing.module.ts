import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCsCollectionPage } from './test-cs-collection.page';

const routes: Routes = [
  {
    path: '',
    component: TestCsCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCsCollectionPageRoutingModule {}
