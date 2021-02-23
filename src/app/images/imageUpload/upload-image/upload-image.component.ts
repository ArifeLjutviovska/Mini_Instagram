import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { Album } from 'src/app/models/album';
import { Image } from 'src/app/models/image';
import { InfoService } from 'src/app/shared/info.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  albums:Album[];
  ready = false;
  thumb="";
  upload:boolean=false;
  uploader = new FileUploader({
    maxFileSize: 1024 * 1024 * 1
    });
  uploadImageForm:FormGroup;
  title:FormControl;
  albumId:FormControl;
  url:FormControl;

  
constructor(private infoService:InfoService,private router:Router){}

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      var image_file=file._file
      const reader = new FileReader();
     reader.addEventListener('load', () => {
      this.ready=true;
      this.thumb=reader.result.toString();
    });
    reader.readAsDataURL(image_file);
    }
    this.title=new FormControl('');
    this.albumId=new FormControl();
    this.url=new FormControl('');

    this.uploadImageForm=new FormGroup({
      albumId:this.albumId,
      title:this.title,
      url:this.url,

    })
    this.infoService.getAlbums().subscribe(albums=>this.albums=albums)
  }
  imageUpload(formValues){
    this.upload=true;
    let ID:number=5000+this.infoService.uploadedImages.length+1
    let img:Image={
      id:ID,
      title:formValues.title,
      albumId:+formValues.albumId,
      url:formValues.url,
      thumbnailUrl:this.thumb
    }
   this.infoService.uploadImage(img);
   if(confirm('Image Added')){
    this.router.navigate(['images']);
   }
   
  }

}
