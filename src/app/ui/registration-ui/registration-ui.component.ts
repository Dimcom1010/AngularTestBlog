import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-ui',
  templateUrl: './registration-ui.component.html',
  styleUrls: ['./registration-ui.component.css']
})
export class RegistrationUiComponent implements OnInit {
  regFormInit = {
    name:'',
    login : '',
    password : '',
  }
  constructor(private router:Router) { }
  @Output()
  createUser = new EventEmitter<{  name:string, login:string, password:string}>(); // событие по созданию нового блока

  @Output()
  CloseAdd = new EventEmitter<boolean>()

  ngOnInit(): void {
  }
  onRegistrat(regForm: NgForm){
    if (regForm.value.name &&
      regForm.value.login  &&
      regForm.value.password
){

        this.createUser.emit({name:regForm.value.name, login:regForm.value.login, password:regForm.value.password })
        this.regFormInit.name=''
        this.regFormInit.login=''
        this.regFormInit.password=''
        this.router.navigateByUrl('/home')
    }
  }


}
