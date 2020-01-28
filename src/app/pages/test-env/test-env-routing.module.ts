import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestEnvPage } from './test-env.page';

const routes: Routes = [
  {
    path: '',
    component: TestEnvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestEnvPageRoutingModule {}
