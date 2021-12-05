import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit {

  position:boolean = false

  @Input()
  loadSelector:any
  @Output()
  logOut = new EventEmitter<void>()
  constructor(private authService : AuthService,
              private router:Router) { }

  ngOnInit(): void {

  }

  onlogOut(){

    this.logOut.emit()
    this.router.navigateByUrl('/login')
  }

}
