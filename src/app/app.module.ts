import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import { CoreModule } from './core/core.module';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CanActivateGuard } from './guards/canActivateGuard';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingBlockModule } from './components/loading-block/loading-block.module';
import { AuthInterceptor } from './components/login-page/auth-interceptor';
import { CourseListModule } from './components/course-list/course-list.module';
import { LoadMoreModule } from './components/load-more/load-more.module';
import { LoginPageModule } from './components/login-page/login-page.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { CoursePageModule } from './components/course-page/course-page.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './redux/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './redux/epics/courses.effect';

const APP_PROVIDERS = [
    CanActivateGuard
  ];

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        CourseListModule,
        LoadMoreModule,
        LoginPageModule,
        ToolbarModule,
        CoursePageModule,
        HttpClientModule,
        LoadingBlockModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([CoursesEffects]),
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
