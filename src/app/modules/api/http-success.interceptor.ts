import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpSuccessInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        const snackBar = this.injector.get(MatSnackBar);
                        if (event.status === 200 && request.method.toLowerCase() === 'post') {
                            // console.log(event, request, 'HttpEvent');
                            snackBar.open('Opération effectuée avec success', '', {
                                duration: 5000,
                            });
                        }
                    }

                    return event;
                })
            );
    }
}
