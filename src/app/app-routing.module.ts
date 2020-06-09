import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuicklinkStrategy, QuicklinkModule } from 'ngx-quicklink';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  // old syntax
  // { path: 'product', loadChildren: './modules/product/product.module#ProductModule' }, // NgModuleFactory
  { path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // must be at the end
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy
    })
  ],
  exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule { }
