import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Image} from '../models/image';
import { User } from "../models/user";
import { InfoService } from "../shared/info.service";

@Component({
    templateUrl:'./image.component.html',
    styleUrls:[
        './image.component.css'
    ]
})
export class ImageComponent implements OnInit{
    image:Image
    user:User

    constructor(private route:ActivatedRoute,private infoService:InfoService){}
    ngOnInit(){

        const id = +this.route.snapshot.paramMap.get('id');
        this.infoService.getImageById(id).subscribe(image=>{
            this.image=image;
            this.infoService.getAlbumByAlbumId(image.albumId).subscribe(album=>{
                this.infoService.getUserByUserId(album.userId).subscribe(user=>{
                    this.user=user;
            
                })
            })
        });
        

    }
}