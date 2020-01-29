import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCsOrderPage } from './test-cs-order.page';

const routes: Routes = [
  {
    path: '',
    component: TestCsOrderPage
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCsOrderPageRoutingModule {}
