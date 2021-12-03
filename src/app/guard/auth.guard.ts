import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {filter, map, Observable} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {MyblogState} from "../store/myblog.reducer";

import {blogListFeatureSelector, loadSelector} from "../store/myblog.selectors";


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {



   isAuth:boolean=false
  constructor(private store$: Store<MyblogState> ) {
  }

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log("route " + route.url)
    // console.log("state " + state.url)


    this.store$.pipe(
      select(blogListFeatureSelector),
      filter(state=>!!state)
    ).subscribe(state=>{
      if (state.authorized===true){
        this.isAuth=true
        console.log("authorized true")

      }else{
        this.isAuth=false
        console.log("authorized false")
      }

    })

    return this.isAuth;

  }


}

