import { Component, Input, OnInit } from "@angular/core";
import { InfoService } from "../shared/info.service";
import {Image} from '../models/image';
import {User} from '../models/user';
import {  ActivatedRoute, Router } from "@angular/router";
import { filter } from 'rxjs/operators';

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
    filteredImages:Image[];




    constructor(private infoService:InfoService,private router:Router,private route:ActivatedRoute){
     
    }

    ngOnInit(){
        let search:string='';
     this.infoService.getUsers().subscribe(users=>this.users=users);
     this.route.queryParams.pipe(
         filter(params => params.searchParam)
     )
     .subscribe(params => {
       search = params.searchParam;
     }
   );
     
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
         if(search===''){
            this.filteredImages=this.images;
        }else{
            this.filteredImages=this.performFilter(search);
            console.log(this.filteredImages.length)
        }
         
         
     });
    

  
     
    }
    performFilter(searchParam: string): Image[] {
        searchParam = searchParam.toLocaleLowerCase();
        return this.images.filter((image: Image) =>
          image.title.toLocaleLowerCase().indexOf(searchParam) !== -1);
      }
    seeImageDetails(id){
        this.router.navigate(['/images',id]);

    }

 
 

}