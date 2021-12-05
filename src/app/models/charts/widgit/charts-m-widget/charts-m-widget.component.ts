import { Component, OnInit } from '@angular/core';
import {totalDataType} from "../../types/typeCharts";
import {select, Store} from "@ngrx/store";
import { ChartsState} from "../../store/chart.reducer";
import {chartsDataSelector} from "../../store/chart.selektor";
import {Observable} from "rxjs";
import {MyblogState} from "../../../../store/myblog.reducer";

@Component({
  selector: 'app-charts-m',
  templateUrl: './charts-m-widget.component.html',
  styleUrls: ['./charts-m-widget.component.css']
})
export class ChartsMWidgetComponent implements OnInit {

  dataInit:totalDataType={
    dataX:[],
    dataY:[]
  }
  totalData$:Observable<totalDataType>= this.store$.pipe(select(chartsDataSelector))

  constructor(private store$:Store<ChartsState>) { }

  ngOnInit(): void {
  }

}
