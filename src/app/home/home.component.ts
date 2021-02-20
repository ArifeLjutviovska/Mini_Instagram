import { Component, Input, OnInit } from "@angular/core";
import { InfoService } from "../shared/info.service";
import {Image} from '../models/image';
import {User} from '../models/user';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:[
        `./home.component.css`
    ]

})
export class HomeComponent implements OnInit{
    imagesWithUsers:Map<User,Image>;
    errorMessage: string;
    images:Image[]
    users:User[]




    constructor(private infoService:InfoService){}

    ngOnInit(){
     this.infoService.getImages().subscribe(images=>this.images=images);
     this.infoService.getUsers().subscribe(users=>this.users=users);

    }

 
 

}