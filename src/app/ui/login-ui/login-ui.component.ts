import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.css']
})
export class LoginUiComponent implements OnInit {
  loginFormInit = {
    login : '',
    password : '',
  }

  @Output()
  onlogIn = new EventEmitter<boolean>()
  @Output()
  Add = new EventEmitter<boolean>()
  @Output()
  onlogOut = new EventEmitter<boolean>()

  constructor(private authService:AuthService ) { }

  ngOnInit(): void {}

  onLogin(loginForm: NgForm){
    if (loginForm.value){
      this.onCheckPassword(loginForm.value.login,loginForm.value.password)
      this.loginFormInit.login = '',
        this.loginFormInit.password = ''
    }
  }

  onAdd(){
    this.Add.emit(true)
  }
    onCheckPassword(login:string,password:string){
    this.authService.onCheckPasswordService(login,password)
  }

}
