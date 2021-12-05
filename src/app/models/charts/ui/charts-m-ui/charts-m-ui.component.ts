import {Component, Input, OnInit} from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-charts-m-ui',
  templateUrl: './charts-m-ui.component.html',
  styleUrls: ['./charts-m-ui.component.css']
})
export class ChartsMUiComponent implements OnInit {

  testX:string[]=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  testY:number[]=[820, 932, 901, 934, 1290, 1330, 1320]
  @Input() totalData:any

  constructor() {
  }

  ngOnInit(): void {
    this.filterCharts(this.testX,this.testY)

//
  }
  filterCharts(x:string[],y:number[])
  {
    let chartDom = document.getElementById('moduleCharts');
    // @ts-ignore
    let myChart = echarts.init(chartDom);
    let option;

    option = {
      xAxis: {
        type: 'category',
        data: x
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: y,
          type: 'line',
          smooth: true
        }
      ]
    };

    option && myChart.setOption(option);
  }


}
