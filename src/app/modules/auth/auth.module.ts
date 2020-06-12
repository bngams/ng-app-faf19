import { AuthService } from './services/auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AuthRoutingModule,
        SharedModule
    ],
    exports: [
        AngularFirestoreModule,
        AngularFireAuthModule
    ],
    providers: [
        CookieService, AuthService
    ],
    declarations: [AuthComponent, RegisterComponent]
})
export class AuthModule { }
