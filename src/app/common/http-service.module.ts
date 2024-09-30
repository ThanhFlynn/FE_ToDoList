import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceModule {
  constructor(public httpClient: HttpClient, private router: Router) {}

  public get<T>(uri: string, param?: any, headers?: HttpHeaders) {
    let params: HttpParams | undefined = undefined;
    if (param) {
      params = new HttpParams({
        fromObject: param,
      });
    }

    return new Promise<T>((resolve, reject) => {
      this.httpClient
        .get<T>(uri, { params: params, headers: headers })
        .pipe(take(1))
        .subscribe(
          (data: T) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  public post<T>(uri: string, body?: any, headers?: HttpHeaders) {
    return new Promise<T>((resolve, reject) => {
      this.httpClient
        .post<T>(uri, body, { headers: headers })
        .pipe(take(1))
        .subscribe(
          (data: T) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  public put<T>(uri: string, body?: any, headers?: HttpHeaders) {
    return new Promise<T>((resolve, reject) => {
      this.httpClient
        .put<T>(uri, body, { headers: headers })
        .pipe(take(1))
        .subscribe(
          (data: T) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  public delete<T>(uri: string, body?: any, headers?: HttpHeaders) {
    return new Promise<T>((resolve, reject) => {
      this.httpClient
        .delete<T>(uri, { headers: headers, body: body })
        .pipe(take(1))
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}
