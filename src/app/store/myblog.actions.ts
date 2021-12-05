import {Action} from "@ngrx/store";
import {MyblogState} from "./myblog.reducer";

export enum myblogActionType  {
  load = "[MYBLOG]  load Myblog state",
  createBlog = "[MYBLOG]  create Myblog item",
  clickLike = "[MYBLOG]  clickLike Myblog item" ,// 10-е создаем имя экшена clickLike
  clickDisLike = "[MYBLOG]  clickDisLike Myblog item" ,
  deleteBlog= "[MYBLOG]  delete blog Myblog item",
  editBlogTopic="[MYBLOG]  edit blog Myblog item Topic",
  editBlogText="[MYBLOG]  edit blog Myblog item Text",
  editBlogTags="[MYBLOG]  edit blog Myblog item Tags",
  login= "[MYBLOG]  is user login",
  logOut= "[MYBLOG]  is user logOut",
  createUser= "[MYBLOG] create new user",
  createComment= "[MYBLOG] create new comment",

}
export class BlogLoadStateActions implements Action {
  readonly type = myblogActionType.load;
  constructor(public payload:{state:MyblogState}) {}
}

export class MyblogCreateActions implements Action {
  readonly type = myblogActionType.createBlog;
  constructor(public payload:{topic:string, text:string, tegs:string[]}) {}
}

export class MyblogDisabledLikeActions implements Action {  // 8-е копируем экшен называем onDisabledLikeActions
  readonly type = myblogActionType.clickLike;    //11-е помещаем имя экшена clickLike в myblogActionType.
  constructor(public payload:{id:any}) {}  // 9-е payload принимает id c типом number

}
export class MyblogDisLikeActions implements Action {
  readonly type = myblogActionType.clickDisLike;
  constructor(public payload:{id:any}) {}
}

export class MyblogDeleteBlogActions implements Action {
  readonly type = myblogActionType.deleteBlog;
  constructor(public payload:{id:number}) {}
}


export class MyblogEditBlogTopicActions implements Action {
  readonly type = myblogActionType.editBlogTopic;
  constructor(public payload:{ topic:string,id:number}){}
}
export class MyblogEditBlogTextActions implements Action {
  readonly type = myblogActionType.editBlogText;
  constructor(public payload:{ text:string,id:number}){}
}
export class MyblogEditBlogTagsActions implements Action {
  readonly type = myblogActionType.editBlogTags;
  constructor(public payload:{ tags:string,id:number}){}
}



export class LoginActions implements Action {
  readonly type = myblogActionType.login;
  constructor(public payload:{name:string,admin:boolean,id:number}) {}}

export class LogOutActions implements Action {
  readonly type = myblogActionType.logOut;
  constructor(public payload:{}){}}

export class createUserActions implements Action {
  readonly type = myblogActionType.createUser;
  constructor(public payload: {name:string, login: string, password: string }){}}

export class MyblogCreateComment implements Action {
  readonly type = myblogActionType.createComment;
  constructor(public payload:{comment:string,id:number}) {}
}


//список экшенов
export type MyblogActions =
  BlogLoadStateActions|
  MyblogCreateActions |
  MyblogDisabledLikeActions |
  MyblogDeleteBlogActions|
  MyblogEditBlogTopicActions|
  MyblogEditBlogTextActions|
  MyblogEditBlogTagsActions|
  MyblogDisLikeActions|
  LoginActions|
  LogOutActions|
  MyblogCreateComment|

  createUserActions;
//12-е добавляем MyblogDisabledLikeActions в список экшенов|==> myblog.reduser.ts
