import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestShQRPage } from './test-sh-qr.page';

const routes: Routes = [
  {
    path: '',
    component: TestShQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestShQRPageRoutingModule {}
