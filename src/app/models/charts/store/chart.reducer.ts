
import {ChartsActionStateActions, chartsActionType} from "./charts.actoins";
import {totalDataType} from "../types/typeCharts";


export const CHART_REDUCER_MODE ='charts'

export interface ChartsState {
  totalData:totalDataType



}
const initialState: ChartsState = {
  totalData:{
    dataX:[1,2],
    dataY:["ss","dd"]
  }

}

export const chartsReducer = (state = initialState,Action: ChartsActionStateActions) => {
  switch (Action.type) {
    case chartsActionType.newcharts:
      return {
        state
      }


    default:
      return state
  }

}
