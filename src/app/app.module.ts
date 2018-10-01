import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './course-list/course-list.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { LoadMoreModule } from './load-more/load-more.module';
import { LoginPageModule } from './login-page/login-page.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { CoursePageModule } from './course-page/course-page.module';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CanActivateGuard } from './guards/canActivateGuard';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './login-page/auth-interceptor';

const APP_PROVIDERS = [
    CanActivateGuard
  ];

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        CourseListModule,
        BreadcrumbsModule,
        LoadMoreModule,
        LoginPageModule,
        ToolbarModule,
        CoursePageModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        APP_PROVIDERS,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
