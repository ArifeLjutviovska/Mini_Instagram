import { Component, Input, OnInit } from "@angular/core";
import { Album } from "../../models/album";
import { Image } from "../../models/image";
import { InfoService } from "../../shared/info.service";

@Component({
    selector:'user-images',
    templateUrl:'./user.images.component.html',
    styleUrls:[
        './user.images.component.css'
    ]
})
export class UserImageComponent implements OnInit{
    @Input() album:Album
    userImages:Image[]
  
    constructor(private infoService:InfoService){}

    ngOnInit(){
       this.infoService.getImagesByAlbumId(this.album.id).subscribe(images=>this.userImages=images);
    }
    

}