import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestShPage } from './test-sh.page';

const routes: Routes = [
  {
    path: '',
    component: TestShPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestShPageRoutingModule {}
