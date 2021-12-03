
import { Routes } from '@angular/router';
import {BlogsWidgetComponent} from "./widget/blogs-widget/blogs-widget.component";
import {ChartsWidgetComponent} from "./widget/charts-widget/charts-widget.component";
import {LoginWidgetComponent} from "./widget/login-widget/login-widget.component";
import {AuthGuard} from "./guard/auth.guard";

import {HomeWidgetComponent} from "./widget/home-widget/home-widget.component";
import {Page404Component} from "./ui/page404/page404.component";
import {BlogReadableUiComponent} from "./ui/blog-readable-ui/blog-readable-ui.component";
import {BlogReadableWidgetComponent} from "./widget/blog-readable-widget/blog-readable-widget.component";


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
  },
    {
      path: '**',
      component:Page404Component,

    }
  ]
