import {Component, Input, OnInit} from '@angular/core';
import {DescriptionsDataType} from "../../types/myblog";

@Component({
  selector: 'app-descriptions-ui',
  templateUrl: './descriptions-ui.component.html',
  styleUrls: ['./descriptions-ui.component.css']
})


export class DescriptionsUiComponent implements OnInit {

  descriptionsDataInit:DescriptionsDataType[] | undefined=[
    {
      text: "",
      img: 0,
    }
  ]
  @Input()
  descriptionsData: any
  constructor() { }

  ngOnInit(): void {
    this.descriptionsDataInit=this.descriptionsData
  }

}
