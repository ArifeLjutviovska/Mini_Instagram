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
        if(id<=5000){
        this.infoService.getImageById(id).subscribe(image=>{
            let editedImg:Image;
            this.infoService.updatedImages.forEach(img=>{
                if(img.id===image.id){
                    editedImg=img;
                }
            })
            if(editedImg){
                this.image=editedImg;
            }else{
                this.image=image;
            }
            
            this.infoService.getAlbumByAlbumId(image.albumId).subscribe(album=>{
                this.infoService.getUserByUserId(album.userId).subscribe(user=>{
                    this.user=user;
            
                })
            })
        });
    }else{
        this.infoService.uploadedImages.forEach(img=>{
            if(img.id===id){
               let image:Image=img;
               let editedImg:Image;
               this.infoService.updatedImages.forEach(img=>{
                   if(img.id===image.id){
                       editedImg=img;
                   }
               })
               if(editedImg){
                   this.image=editedImg;
               }else{
                   this.image=image;
               }
                this.infoService.getAlbumByAlbumId(img.albumId).subscribe(album=>{
                    this.infoService.getUserByUserId(album.userId).subscribe(user=>{
                        this.user=user;
                
                    })
                })
            }
        })
    }
        

    }
  
    editClicked(id:number){
        this.isSelectedTab="Edit"
        //this.infoService.updateImage(id,body).subscribe(image=>this.image.title=image.title)
        this.router.navigate([ `images/${id}/edit`])

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