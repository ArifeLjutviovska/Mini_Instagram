import { Component, Input, OnInit } from "@angular/core";
import { InfoService } from "../shared/info.service";
import {Image} from '../models/image';
import {User} from '../models/user';
import { ActivatedRoute, Router } from "@angular/router";

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
     });
     
    }
    seeImageDetails(id){
        this.router.navigate(['/images',id]);

    }

 
 

}