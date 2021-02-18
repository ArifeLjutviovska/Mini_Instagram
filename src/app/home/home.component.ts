import { Component, Input, OnInit } from "@angular/core";
import { ImageService } from "../shared/image.service";
import {Image} from '../models/image.model';
@Component({
    selector:'home',
    templateUrl:'./home.component.html'

})
export class HomeComponent implements OnInit{
    images:Image[];
    errorMessage: string;;
    constructor(private imageService:ImageService){}
    ngOnInit(){
        this.getImages();
    }
    getImages(){
        this.imageService.getImages().subscribe({
            next: images => {
              this.images = images;
            },
            error: err => this.errorMessage = err
          });
    }

}