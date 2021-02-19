import { Component, Input, OnInit } from "@angular/core";
import { InfoService } from "../shared/info.service";
import {Image} from '../models/image';
import {User} from '../models/user';
import { Album } from "../models/album";
@Component({
    selector:'home',
    templateUrl:'./home.component.html'

})
export class HomeComponent implements OnInit{
    imagesWithUsers:Map<User,Image>;
    errorMessage: string;
    images:Image[]



    constructor(private infoService:InfoService){}

    ngOnInit(){
     this.infoService.getImages().subscribe(images=>this.images=images);

     
    }

 
 

}