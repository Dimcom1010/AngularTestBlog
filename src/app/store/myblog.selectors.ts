import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MYBLOG_REDUCER_NODE, MyblogState} from "./myblog.reducer";
//FeatureSelector извлекает первые элемент объекта из хронилища Store
//под MYBLOG_REDUCER_NODE хрониться мой стейт
// FeatureSelector извлекает узел MyblogState
export const blogListFeatureSelector = createFeatureSelector<MyblogState>(MYBLOG_REDUCER_NODE)

export const myblogListSelector = createSelector(
  blogListFeatureSelector,
  state => state.blogList
)
export const UserAdmin = createSelector(
  blogListFeatureSelector,
  state=> state.admin
)
export const loadSelector = createSelector(
  blogListFeatureSelector,
  state=> state.authorized
)
export const userIdAutorithedSelector = createSelector(
  blogListFeatureSelector,
  state=> state.userIdAutorithed,
)
export const descriptionsDataSelector = createSelector(
  blogListFeatureSelector,
  state=> state.descriptionsData,
)




