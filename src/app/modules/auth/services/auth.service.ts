import { AngularFireAuth } from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie-service';
import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFirestoreDocument } from '@angular/fire/firestore/public_api';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData: any;

    constructor(
        public afs: AngularFirestore,
        public afAuth: AngularFireAuth,
        public router: Router,
        public cookieService: CookieService,
        public ngZone: NgZone
    ) {
        this.afAuth.authState.subscribe(user => {
            console.log(user)
            if (user !== null) {
                console.log('got user')
                this.userData = user;
                this.cookieService.set('user', JSON.stringify(this.userData));
                JSON.parse(this.cookieService.get('user'));
            } else {
                this.cookieService.set('user', null);
                JSON.parse(this.cookieService.get('user'));
            }
        });
    }

    async SignIn(email: string, password: string) {
        try {
            const result = await this.afAuth.signInWithEmailAndPassword(email, password);
            this.cookieService.set('user', JSON.stringify(result.user));
            this.ngZone.run(() => {
                this.router.navigate(['home']);
            });
            this.SetUserData(result.user);
        } catch (error) {
            window.alert(error.message);
        }
    }

    async SignUp(email: string, password: string) {
        try {
            const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
            this.SendVerificationMail();
            this.SetUserData(result.user);
        } catch (error) {
            window.alert(error.message);
        }
    }

    SendVerificationMail() {
        return this.afAuth.user.subscribe(user => user.sendEmailVerification().then(() => {
            this.router.navigate(['home']);
        }));
    }

    async ForgotPassword(passwordResetEmail) {
        try {
            await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
            window.alert('Password reset email sent, check your inbox.');
        } catch (error) {
            window.alert(error);
        }
    }

    async AuthLogin(provider) {
        try {
            const result = await this.afAuth.signInWithPopup(provider);
            this.ngZone.run(() => {
                this.router.navigate(['home']);
            });
            this.SetUserData(result.user);
        } catch (error) {
            window.alert(error);
        }
    }

    SetUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    }

    SignOut() {
        return this.afAuth.signOut().then(() => {
            this.cookieService.delete('user');
            this.router.navigate(['login']);
        });
    }

    isLoggedIn(): boolean {
        const user = this.cookieService.get('user') !== '' ? JSON.parse(this.cookieService.get('user')) : null;
        return (user !== null && user.emailVerified !== false) ? true : false;
    }
}
