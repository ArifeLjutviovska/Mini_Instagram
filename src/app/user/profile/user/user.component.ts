import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Album } from "../../../models/album";
import { Image } from "../../../models/image";
import { User } from "../../../models/user";
import { InfoService } from "../../../shared/info.service";

@Component({
    selector:'user',
    templateUrl:'./user.component.html',
    styleUrls:[
        '../userProfile/user.profile.component.css'
    ]
})
export class UserComponent implements OnInit{
    @Input() user:User;
    @Input() albums:Album[];


    constructor(private route:ActivatedRoute,private infoService:InfoService){}

    ngOnInit(){
       
    }
}