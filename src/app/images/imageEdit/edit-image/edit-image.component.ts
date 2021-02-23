import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { Image } from 'src/app/models/image';
import { InfoService } from 'src/app/shared/info.service';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {
  albums:Album[];
  image:Image;
  editImageForm:FormGroup;
  title:FormControl;
  albumId:FormControl;
  url:FormControl;

  constructor(private infoService:InfoService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   
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
                this.title=new FormControl(editedImg.title);
                this.albumId=new FormControl(editedImg.albumId);
                this.url=new FormControl(editedImg.url);
            }else{
                this.image=image;
                this.title=new FormControl(image.title);
                this.albumId=new FormControl(image.albumId);
                this.url=new FormControl(image.url);
            }

          
           
           this.editImageForm=new FormGroup({
             albumId:this.albumId,
             title:this.title,
             url:this.url
           })
     })
    }else{
      let editedImg:Image;
           let image:Image;
           this.infoService.uploadedImages.forEach(img=>{
                if(img.id===id){
                  image=img;
                  console.log(image)
                }
           })
            this.infoService.updatedImages.forEach(img=>{
                if(img.id===image.id){
                    editedImg=img;
                }
            })
            if(editedImg){
                this.image=editedImg;
                this.title=new FormControl(editedImg.title);
                this.albumId=new FormControl(editedImg.albumId);
                this.url=new FormControl(editedImg.url);
            }else{
                this.image=image;
                this.title=new FormControl(image.title);
                this.albumId=new FormControl(image.albumId);
                this.url=new FormControl(image.url);
            }

          
           
           this.editImageForm=new FormGroup({
             albumId:this.albumId,
             title:this.title,
             url:this.url
           })
    }
     this.infoService.getAlbums().subscribe(albums=>this.albums=albums)
  }

  saveImage(formValues){
    const id = +this.route.snapshot.paramMap.get('id');
    let image:Image={
      title:formValues.title,
      albumId:+formValues.albumId,
      url:formValues.url,
      id:this.image.id,
      thumbnailUrl:this.image.thumbnailUrl
    }
    this.infoService.updateImage(id,image);
    if(confirm('Image Changed')){
      this.router.navigate(['images',id]);
    }
  }

}
