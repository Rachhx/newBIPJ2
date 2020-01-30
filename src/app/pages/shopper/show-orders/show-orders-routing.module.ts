import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowOrdersPage } from './show-orders.page';

const routes: Routes = [
  {
    path: '',
    component: ShowOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowOrdersPageRoutingModule {}
