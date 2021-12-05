import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CHART_REDUCER_MODE, ChartsState} from "./chart.reducer";

//FeatureSelector извлекает первые элемент объекта из хронилища Store
//под MYBLOG_REDUCER_NODE хрониться мой стейт
// FeatureSelector извлекает узел MyblogState
export const chartsDataFeatureSelector = createFeatureSelector<ChartsState>(CHART_REDUCER_MODE)

export const chartsDataSelector = createSelector(
  chartsDataFeatureSelector,
  state => state.totalData
)
