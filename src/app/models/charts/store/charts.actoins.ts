import { Action } from "@ngrx/store";
import {ChartsState} from "./chart.reducer";


export enum chartsActionType  {
   newcharts = "[CHRTS]  newcharts",

}

export class ChartsActionStateActions implements Action {
  readonly type = chartsActionType.newcharts;
  constructor(public payload:{state:ChartsState}) {}
}



export type chartsActions =

  ChartsActionStateActions


  ;
