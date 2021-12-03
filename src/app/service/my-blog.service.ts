import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {MyblogState} from "../store/myblog.reducer";
import {blogListFeatureSelector} from "../store/myblog.selectors";
import {filter} from "rxjs";
import {BlogLoadStateActions} from "../store/myblog.actions";



export const MYBOLOG_LOCALSTORAGEE_KEY = 'myblog'

@Injectable({
  providedIn: 'root'
})



export  class MyBlogService{

  private isInit = false; // isInit делаем private что бы его изменения были возможны только внутри данного класса

  constructor(private store$: Store<MyblogState>) {}
  init(){

    if (this.isInit){
      return
    }
    this.loadFromStorage() // вызывает проверку локального стора + надо добавить прослушку событий на соседних вкладках windows...
    this.isInit = true

    this.store$.pipe( // подписываемся на событие
      select(blogListFeatureSelector),
      filter(state=>!!state)  // оператор фильтор не пропустир в подписчик событие если возвращается false
    ).subscribe(state=>{
      localStorage.setItem(MYBOLOG_LOCALSTORAGEE_KEY, JSON.stringify(state));
    });

    window.addEventListener('storage',()=>this.loadFromStorage())
  }
  private loadFromStorage(){
    const  storegeStatu = localStorage.getItem(MYBOLOG_LOCALSTORAGEE_KEY);
    if (storegeStatu){
      this.store$.dispatch(new BlogLoadStateActions({ //вызываем экшен который возьмёт значения из LOCALSTORAGEE и поместит его в стэйт
        state:JSON.parse(storegeStatu)}))
    }
  }
}

