
export  interface  Myblog {
  id: number;
  name:string;
  topic:string;
  text:string;
  tegs:string[];
  like_position: number[];
  dataCreature: string;
  comments?:any

}
export  interface  Login {
  id: number;
  name:string;
  login:string;
  password:string;
  admin:boolean;
  dataCreatureUser: string;

}
export interface BasicEchartLineModel{
  name:string;
  value:number;
}

export interface Coment{
  usersComent?:string;
  text?:string;
}

