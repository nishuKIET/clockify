// import { Inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
// import { Http } from '@angular/http';

// import { AppStorage } from '../shared/for-storage/universal.inject';
// import { UrlConfig } from '../config/tandf/url-config';

// @Injectable()
// export class AuthService {

//     config: any = new UrlConfig().getConfig();

//     constructor(@Inject(AppStorage) private appStorage: Storage, private http: Http) {}

//     getAuthToken() {
//         return this.appStorage.getItem('_token');
//     }

//     refreshToken(): Observable<any> {
//         console.log('refresh token called');
//         const url = this.config.homeUrl + '/token';
//         return this.http.get(url);
//     }

//     deleteTokens() {
//       this.appStorage.clear();
//     }
// }