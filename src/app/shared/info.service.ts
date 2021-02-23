import { HttpClient ,HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable,of,throwError} from 'rxjs';
import {Image} from '../models/image';
import { catchError,tap } from 'rxjs/operators';
import { Album } from "../models/album";
import { User } from "../models/user";



@Injectable()
export class InfoService{
    readonly photos='https://jsonplaceholder.typicode.com/photos';
    readonly users='https://jsonplaceholder.typicode.com/users';
    readonly albums_root='https://jsonplaceholder.typicode.com/albums';
    
    public deletedImageId:number[]=[];


   
    constructor(private http:HttpClient){}

    getImages():Observable<Image[]>{
     
       return  this.http.get<Image[]>(this.photos).pipe(
            catchError(this.handleError)
        );

    }
    deleteImage(id){
      this.deletedImageId.push(id);
      this.http.delete<Image>(this.photos+`/${id}`).pipe(catchError(this.handleError)).subscribe(response=>console.log(response));
    }
    updateImage(id,body){
      console.log(id)
      console.log(body)
      return this.http.put<Image>(this.photos+`/${id}`,body).pipe(catchError(this.handleError));
    }
  
    getImageById(id):Observable<Image>{
     
      return this.http.get<Image>(this.photos+`/${id}`).pipe(
           catchError(this.handleError)
       );

   }

    getUserByImage(id):Observable<User>{
      let user:Observable<User>
      this.getImageById(id).subscribe(image=>{
        this.getAlbumByAlbumId(image.albumId).subscribe(album=>{
          user= this.getUserByUserId(album.userId);
        })
      })
      console.log(user)
      return user;
    }

    getUsers():Observable<User[]>{
     
      return  this.http.get<User[]>(this.users).pipe(
           catchError(this.handleError)
       );

   }
   getAlbumsByUserId(id):Observable<Album[]>{
     
    return  this.http.get<Album[]>(this.albums_root+`?userId=${id}`).pipe(
         catchError(this.handleError)
     );

 }
 getImagesByAlbumId(id):Observable<Image[]>{
   return this.http.get<Image[]>(this.photos+`?albumId=${id}`).pipe(catchError(this.handleError));
 }



 
  getUserByUserId(id:number):Observable<User>{

    return this.http.get<User>(this.users+`/${id}`);

  }
  getAlbumByAlbumId(id:number):Observable<Album>{

    return this.http.get<Album>(this.albums_root+`/${id}`).pipe(
            catchError(this.handleError)
        );
 
    }
 
   
   
    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}