import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as echarts from 'echarts';
import {Myblog} from "../../model/myblog";

@Component({
  selector: 'app-charts-ui',
  templateUrl: './charts-ui.component.html',
  styleUrls: ['./charts-ui.component.css']
})
export class ChartsUiComponent implements OnInit {

  idData: number[]=[];
  nameData: string[]=[];
  topicData: string[]=[];
  likesData: number[]=[];
  dataData:string[]=[]

  @Input() blogList:any


  constructor() {}




  ngOnInit(): void {
    this.filterByLike(this.blogList)

  }


  filterByLike(blogList:any){
    blogList.forEach((x:Myblog)=> {
      this.idData.push(x.id)
      this.nameData.push(x.name)
      this.likesData.push(x.like_position.length )
      this.dataData.push(x.dataCreature)

    })

    this.filterCharts(this.dataData,this.likesData)

  }
  filterCharts(x:any,y:any){
    var chartDom = document.getElementById('main');
    // @ts-ignore
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      color: [
        '#c23531',
      ],
      xAxis: {
        type: 'category',
        splitLine: {show: false},
        axisLine: {// Координатная линия
          lineStyle: {
            type: 'solid',
            color: '#d8d8d8',// Цвет оси
            width:'1'// Ширина координатной линии
          }
        },

        data: x

      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: y,
          axisLabel: {
            textStyle: {
              color: '#878787',// Координаты имеют определенный цвет
            }
          },
          type: 'bar'
        }
      ]
    };

    option && myChart.setOption(option);
  }


}
