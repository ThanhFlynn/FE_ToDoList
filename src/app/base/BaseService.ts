import { HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HttpServiceModule } from '../common/http-service.module';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  http = inject(HttpServiceModule);

  readonly rootAPI: string = 'http://localhost:3000/';

  login(username: string, password: string): Promise<any> {
    /**hostname: URL làm việc hiện tại */
    let hostname: string = window.location.hostname;

    const body = new HttpParams({
      fromObject: {
        grant_type: 'password',
        username,
        password,
        hostname,
      },
    });
    return this.http.post<any>(`${this.rootAPI}/login`, body.toString());
  }
}
