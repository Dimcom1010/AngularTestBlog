import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {MYBLOG_REDUCER_NODE, myblogReducer} from "./store/myblog.reducer";
import {RouterModule} from "@angular/router";
import {myblogRoutes} from "./routes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {NgxEchartsModule} from "ngx-echarts";
import {MatInputModule} from "@angular/material/input";
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import {MatListModule} from "@angular/material/list";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from "@angular/material/card";
import { LilePosutionPipe } from './pipes/lile-posution.pipe';
import { NumberInArrayPipe } from './pipes/number-in-array.pipe';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";

import { BlogNewComponent } from './ui/blog-new-ui/blog-new.component';
import { BlogsComponent } from './ui/blogs-ui/blogs.component';
import { BlogsWidgetComponent } from './widget/blogs-widget/blogs-widget.component';
import { BlogEditUiComponent } from './ui/blog-edit-ui/blog-edit-ui.component';
import { BlogDisplayUiComponent } from './ui/blog-display-ui/blog-display-ui.component';
import { MenuComponent } from './ui/menu/menu.component';
import { LoginUiComponent } from './ui/login-ui/login-ui.component';
import { ChartsUiComponent } from './ui/charts-ui/charts-ui.component';
import { ChartsWidgetComponent } from './widget/charts-widget/charts-widget.component';
import { MenuWidgetComponent } from './widget/menu-widget/menu-widget.component';
import { LoginWidgetComponent } from './widget/login-widget/login-widget.component';
import { RegistrationUiComponent } from './ui/registration-ui/registration-ui.component';
import { HomeUiComponent } from './ui/home-ui/home-ui.component';
import { HomeWidgetComponent } from './widget/home-widget/home-widget.component';
import { BlogReadableUiComponent } from './ui/blog-readable-ui/blog-readable-ui.component';
import { Page404Component } from './ui/page404/page404.component';
import { CommentsComponent } from './ui/comments/comments.component';
import {MatStepperModule} from "@angular/material/stepper";

import {CommonModule} from "@angular/common";
import {ChartsModule} from "./models/charts/charts.module";


import { BlogReadableWidgetComponent } from './widget/blog-readable-widget/blog-readable-widget.component';
import { BlogNewWidgetComponent } from './widget/blog-new-widget/blog-new-widget.component';
import { RegistrationWidgetComponent } from './widget/registration-widget/registration-widget.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatTabsModule} from "@angular/material/tabs";
import { FooterUiComponent } from './ui/footer-ui/footer-ui.component';





@NgModule({
  declarations: [
    AppComponent,
    BlogNewComponent,
    BlogsComponent,
    BlogsWidgetComponent,
    BlogEditUiComponent,
    BlogDisplayUiComponent,
    MenuComponent,
    LoginUiComponent,
    ChartsUiComponent,
    ChartsWidgetComponent,
    MenuWidgetComponent,
    LoginWidgetComponent,
    RegistrationUiComponent,
    SearchPipePipe,
    HomeUiComponent,
    HomeWidgetComponent,
    BlogReadableUiComponent,
    Page404Component,
    LilePosutionPipe,
    NumberInArrayPipe,
    CommentsComponent,
    BlogReadableWidgetComponent,
    BlogNewWidgetComponent,
    RegistrationWidgetComponent,
    FooterUiComponent,




  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,

    RouterModule.forRoot(myblogRoutes),
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },

    }),

    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    CommonModule,
    EffectsModule.forRoot([]),
    StoreModule.forFeature(MYBLOG_REDUCER_NODE, myblogReducer),
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    NgxEchartsModule,
    MatInputModule,
    MatListModule,
    MatBadgeModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatStepperModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
