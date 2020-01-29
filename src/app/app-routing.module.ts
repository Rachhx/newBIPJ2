import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'order-info/:id',
    loadChildren: () => import('./order-info/order-info.module').then( m => m.OrderInfoPageModule)
  },
  {
    path: 'accept-order/:id',
    loadChildren: () => import('./accept-order/accept-order.module').then( m => m.AcceptOrderPageModule)
  },
  {
    path: 'item-info',
    loadChildren: () => import('./item-info/item-info.module').then( m => m.ItemInfoPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'show-orders',
    loadChildren: () => import('./show-orders/show-orders.module').then( m => m.ShowOrdersPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  },
  {
    path: 'test-env', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/test-env/test-env.module').then( m => m.TestEnvPageModule)
  },
  {
    path: 'test-cs', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/test-cs/test-cs.module').then( m => m.TestCsPageModule)
  },
  {
    path: 'test-sh', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/test-sh/test-sh.module').then( m => m.TestShPageModule)
  },
  {
    path: 'test-sh-order/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/test-sh-order/test-sh-order.module').then( m => m.TestShOrderPageModule)
  },
  {
    path: 'test-cs-order/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/test-cs-order/test-cs-order.module').then( m => m.TestCsOrderPageModule)
  },
  {
    path: 'test-chat/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/test-chat/test-chat.module').then( m => m.TestChatPageModule)
  },
  {
    path: 'test-cs-collection',
    loadChildren: () => import('./modals/test-cs-collection/test-cs-collection.module').then( m => m.TestCsCollectionPageModule)
  },
  {
    path: 'test-sh-qr',
    loadChildren: () => import('./modals/test-sh-qr/test-sh-qr.module').then( m => m.TestShQRPageModule)
  },
  {
    path: 'test-sh-progress',
    loadChildren: () => import('./modals/test-sh-progress/test-sh-progress.module').then( m => m.TestShProgressPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
