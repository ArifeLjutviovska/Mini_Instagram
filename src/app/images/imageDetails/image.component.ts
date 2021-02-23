import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";
import {Image} from '../../models/image';
import { User } from "../../models/user";
import { InfoService } from "../../shared/info.service";

@Component({
    selector:'image-details',
    templateUrl:'./image.component.html',
    styleUrls:[
        './image.component.css'
    ]
})
export class ImageComponent implements OnInit{
    image:Image
    user:User
    isSelectedTab:string='Edit'

    constructor(private route:ActivatedRoute,private infoService:InfoService,private router:Router){}
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
  
    editClicked(){
        this.isSelectedTab="Edit"
        const id = +this.route.snapshot.paramMap.get('id');
        const body={title:'test'}
        this.infoService.updateImage(id,body).subscribe(image=>this.image.title=image.title)

     }
     deleteClicked(id:number){
      this.isSelectedTab="Delete"
      if(confirm("Are you sure to delete the image")){
          this.infoService.deleteImage(id);
          this.router.navigate(['/images'])
          confirm("Image deleted")  
          
      }
     }
}