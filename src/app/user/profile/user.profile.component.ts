import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Album } from "../../models/album";
import { Image } from "../../models/image";
import { User } from "../../models/user";
import { InfoService } from "../../shared/info.service";

@Component({
    templateUrl:'./user.profile.component.html',
    styleUrls:[
        './user.profile.component.css'
    ]
})
export class UserProfileComponent implements OnInit{
    user:User
    albums:Album[]
    isSelectedTab = 'Images';
    


    constructor(private route:ActivatedRoute,private infoService:InfoService){}

    ngOnInit(){
        const id = +this.route.snapshot.paramMap.get('id');
        this.infoService.getUserByUserId(id).subscribe(user=>this.user=user)
        this.infoService.getAlbumsByUserId(id).subscribe(albums=>this.albums=albums);


    }
    imagesClicked(){
       this.isSelectedTab="Images"
    }
    uploadClicked(){
     this.isSelectedTab="Upload"
    }
}