import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {InlineSVGModule} from "ng-inline-svg-2";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BlogPostPageComponent } from './components/blog/pages/blog-post-page/blog-post-page.component';
import {MatDialogModule} from "@angular/material/dialog";
import { PostComponent } from './components/blog/wigets/post/post.component';
import { BlogAsideComponent } from './components/blog/wigets/blog-aside/blog-aside.component';
import {MatCardModule} from "@angular/material/card";
import { BlogBannerComponent } from './components/blog/wigets/blog-banner/blog-banner.component';
import { PostCardComponent } from './components/blog/wigets/post-card/post-card.component';
import { MonochromeDirective } from './directives/monochrome.directive';
import {MatIconModule} from "@angular/material/icon";
import {IconService} from "./services/icon.service";
import { ChartsComponent } from './components/charts/charts.component';
import {ChartsService} from "./services/charts.service";
import { ChartComponent } from './components/charts/chart/chart.component';
import {HostsService} from "./services/hosts.service";
import { BlogPageComponent } from './components/blog/pages/blog-page/blog-page.component';
import { SearchComponent } from './components/blog/ui/search/search.component';
import { SelectComponent } from './components/blog/ui/select/select.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { PaginationComponent } from './components/blog/ui/pagination/pagination.component';
import { BlogContentComponent } from './components/blog/wigets/blog-content/blog-content.component';
import {ModalService} from "./services/modal.service";
import {HeadersInterceptor} from "./interceptors/headers.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    FooterComponent,
    BlogPostPageComponent,
    PostComponent,
    BlogAsideComponent,
    BlogBannerComponent,
    PostCardComponent,
    MonochromeDirective,
    ChartsComponent,
    ChartComponent,
    BlogPageComponent,
    SearchComponent,
    SelectComponent,
    PaginationComponent,
    BlogContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  providers: [
    IconService,
    ChartsService,
    HostsService,
    ModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
