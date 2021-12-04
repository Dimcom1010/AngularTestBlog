import { Component, OnInit } from '@angular/core';
import {BlogsService} from "../../service/blogs.service";
import {Myblog} from "../../model/myblog";

@Component({
  selector: 'app-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.css']
})

export class HomeUiComponent implements OnInit {
pageBlogInfo:Myblog={
  id: 0,
  name: "Пустой",
  topic: "Пустой",
  text: "Пустой",
  tegs:["Пустой","Пустой", "Пустой","Пустой"],
  like_position: [],
  dataCreature: new Date().toDateString()

}


  constructor() { }

  ngOnInit(): void {

  }



}
