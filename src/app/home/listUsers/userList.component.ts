import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";

@Component({
    selector:'user-list',
    templateUrl:'./userList.component.html',
    styleUrls:[
        './userList.component.css'
    ]
})
export class UserListComponent{
  @Input() user:User;
  constructor(private router:Router){}

  seeProfile(){
    this.router.navigate(['/users',this.user.id]);
  }
   
}