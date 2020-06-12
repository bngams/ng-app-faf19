var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","component":"HomeComponent"},{"path":"get-started","component":"GetStartedComponent","canActivate":["AuthGuard"]},{"path":"product","loadChildren":"./modules/product/product.module#ProductModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/product/product-routing.module.ts","module":"ProductRoutingModule","children":[{"path":"","component":"ProductDashboardComponent"}],"kind":"module"}],"module":"ProductModule"}]},{"path":"cart","loadChildren":"./modules/cart/cart.module#CartModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/cart/cart-routing.module.ts","module":"CartRoutingModule","children":[{"path":"","component":"CartComponent"}],"kind":"module"}],"module":"CartModule"}]},{"path":"login","loadChildren":"./modules/auth/auth.module#AuthModule"},{"path":"","redirectTo":"/home","pathMatch":"full"},{"path":"**","component":"NotFoundComponent"}],"kind":"module"},{"name":"routes","filename":"src/app/modules/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"","component":"AuthComponent"},{"path":"register","component":"RegisterComponent"}],"kind":"module"}]}
