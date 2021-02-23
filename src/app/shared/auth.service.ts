import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({providedIn:'root'})
export class AuthService{
    public currentUser:User;
    readonly users='https://jsonplaceholder.typicode.com/users';

        constructor(private http:HttpClient){

        }

}