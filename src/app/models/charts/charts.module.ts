import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {CHART_REDUCER_MODE, chartsReducer} from "./store/chart.reducer";
import {RouterModule} from "@angular/router";
import { ChartsMWidgetComponent } from './widgit/charts-m-widget/charts-m-widget.component';
import {chartsRoutes} from "./routes";
import { ChartsMUiComponent } from './ui/charts-m-ui/charts-m-ui.component';
import {NgxEchartsModule} from "ngx-echarts";




@NgModule({
  declarations: [
    ChartsMWidgetComponent,
    ChartsMUiComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    StoreModule.forFeature(CHART_REDUCER_MODE,chartsReducer),
    RouterModule.forChild(chartsRoutes)
  ]
})
export class ChartsModule { }
