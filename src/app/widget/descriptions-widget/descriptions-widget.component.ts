import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DescriptionsDataType} from "../../types/myblog";
import {select, Store} from "@ngrx/store";
import {descriptionsDataSelector} from "../../store/myblog.selectors";
import {MyblogState} from "../../store/myblog.reducer";

@Component({
  selector: 'app-descriptions-widget',
  templateUrl: './descriptions-widget.component.html',
  styleUrls: ['./descriptions-widget.component.css']
})
export class DescriptionsWidgetComponent implements OnInit {

  descriptionsData$: Observable<DescriptionsDataType[]> = this.store$.pipe(select(descriptionsDataSelector))
  constructor(private store$: Store<MyblogState>) { }

  ngOnInit(): void {
  }

}
