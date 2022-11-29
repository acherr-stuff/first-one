import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class HeadersInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
      const clonedRequest = req.clone({ setHeaders: { Authorization: 'Bearer don\'t forget password', 'custom-study-token': 'perfect future is waiting for us' } });;

      return next.handle(clonedRequest);
  }
}
