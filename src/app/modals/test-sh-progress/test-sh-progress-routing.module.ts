import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestShProgressPage } from './test-sh-progress.page';

const routes: Routes = [
  {
    path: '',
    component: TestShProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestShProgressPageRoutingModule {}
