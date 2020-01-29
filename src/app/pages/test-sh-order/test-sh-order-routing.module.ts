import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestShOrderPage } from './test-sh-order.page';

const routes: Routes = [
  {
    path: '',
    component: TestShOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestShOrderPageRoutingModule {}
