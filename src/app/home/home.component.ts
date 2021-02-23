import { Component, Input, OnInit } from "@angular/core";
import { InfoService } from "../shared/info.service";
import {Image} from '../models/image';
import {User} from '../models/user';
import {  Router } from "@angular/router";


@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:[
        `./home.component.css`
    ]

})
export class HomeComponent {
    errorMessage: string;
    images:Image[];
    users:User[];




    constructor(private infoService:InfoService,private router:Router){
     
    }

    ngOnInit(){
     this.infoService.getUsers().subscribe(users=>this.users=users);
    
     this.infoService.getImages().subscribe(images=>{
         this.images=images.filter(img=>!this.infoService.deletedImageId.includes(img.id));
         this.infoService.uploadedImages.forEach(img=>this.images.push(img));
         let serviceUpdatedImagesIds:number[]=[];
         this.infoService.updatedImages.forEach(img=>serviceUpdatedImagesIds.push(img.id))
        this.images.filter(img=>serviceUpdatedImagesIds.includes(img.id)).forEach(img=>this.infoService.updatedImages.forEach(image=>{
             if(img.id===image.id){
                 this.images[this.images.indexOf(img)]=image;
             }
         }))
         
         
     });

    
     
     
    }
    seeImageDetails(id){
        this.router.navigate(['/images',id]);

    }

 
 

}