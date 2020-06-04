import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    GetStartedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    QuicklinkModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
