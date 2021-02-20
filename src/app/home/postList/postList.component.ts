import { Component, Input, OnInit } from "@angular/core";
import {Album} from '../../models/album'
import { Image } from "../../models/image";
import { User } from "../../models/user";
import {InfoService} from '../../shared/info.service'

@Component({
    selector:'postList',
    templateUrl:'./postList.component.html'
})
export class PostListComponent implements OnInit{

    @Input() image:Image;
    album:Album
    user:User

    constructor(private infoService:InfoService){}

    ngOnInit(){
      this.infoService.getAlbumByAlbumId(this.image.albumId).subscribe(album=>{
          this.album=album;
          this.getUser(album.id);
      })

    }
    getUser(id:number){
        this.infoService.getUserByUserId(id).subscribe(user=>this.user=user)
    }
}