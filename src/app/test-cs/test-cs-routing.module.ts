import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCsPage } from './test-cs.page';

const routes: Routes = [
  {
    path: '',
    component: TestCsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCsPageRoutingModule {}
