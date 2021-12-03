import {Injectable} from '@angular/core';
import {filter, Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {MyblogState} from "../store/myblog.reducer";
import {blogListFeatureSelector} from "../store/myblog.selectors";
import {LoginActions, LogOutActions} from "../store/myblog.actions";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authorized:boolean=false
  login:string=''
  password:string=''
  admin:boolean=false

  usersPassword:string[]=[]
  break:boolean =true

  constructor(private store$: Store<MyblogState>,
              private router:Router) {
  }


  onOut(){
    let status:boolean=false
    this.store$.dispatch(new LogOutActions({status}))
  }

  onCheckPasswordService(login:string,password:string){
    this.break=false
    this.store$.pipe(
      select(blogListFeatureSelector),
      filter(state=>!!state)
    ).subscribe(state=>{
      state.loginState.forEach(x=>{
        if (!this.break) {
          if (x.login === login) {
            if (x.password === password) {
              console.log("УСПЕХ!!!")
              x.admin? this.admin=true:this.admin=false
              this.break=true
              this.onSuccessAuth(x.name,this.admin,x.id)
              this.router.navigateByUrl('/home')

            } else {
              console.log("ОБЛОМ пороль не такой ")
            }
          } else {
            console.log("ОБЛОМ логина нет ")
          }}
      })
    }
    );}

  onSuccessAuth(name:string,admin:boolean, id:number) {
    this.store$.dispatch(new LoginActions({name,admin,id}))
  }

}
