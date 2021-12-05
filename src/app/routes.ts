
import { Routes } from '@angular/router';
import {BlogsWidgetComponent} from "./widget/blogs-widget/blogs-widget.component";
import {ChartsWidgetComponent} from "./widget/charts-widget/charts-widget.component";
import {LoginWidgetComponent} from "./widget/login-widget/login-widget.component";
import {AuthGuard} from "./guard/auth.guard";

import {HomeWidgetComponent} from "./widget/home-widget/home-widget.component";
import {Page404Component} from "./ui/page404/page404.component";
import {BlogReadableWidgetComponent} from "./widget/blog-readable-widget/blog-readable-widget.component";
import {BlogNewComponent} from "./ui/blog-new-ui/blog-new.component";
import {RegistrationWidgetComponent} from "./widget/registration-widget/registration-widget.component";
import {ChartsMWidgetComponent} from "./models/charts/widgit/charts-m-widget/charts-m-widget.component";


export const myblogRoutes: Routes =[
    {
      path: 'home',
      component: HomeWidgetComponent,
      pathMatch:'full',

    },
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full',

  },

  { path: 'blogs',
    component: BlogsWidgetComponent,
    canActivate:[AuthGuard],

  },  { path: 'blogs/:id',
    component: BlogReadableWidgetComponent,
    canActivate:[AuthGuard],

  },
  {
    path: 'charts',
    component: ChartsWidgetComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginWidgetComponent,
  },  {
    path: 'registration',
    component: RegistrationWidgetComponent,
  },
  {
    path: 'new',
    component: BlogNewComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "module",
    component:ChartsMWidgetComponent
  },
    {
      path: '**',
      component:Page404Component,

    }
  ]
