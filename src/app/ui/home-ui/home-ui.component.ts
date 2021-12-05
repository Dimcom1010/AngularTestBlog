import { Component, OnInit } from '@angular/core';
import {BlogsService} from "../../service/blogs.service";
import {Myblog} from "../../types/myblog";

@Component({
  selector: 'app-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.css']
})

export class HomeUiComponent implements OnInit {

  descriptions:boolean=true

  constructor() { }

  ngOnInit(): void {

  }

  onClickDescriptions(){
    this.descriptions=!this.descriptions
  }

}
