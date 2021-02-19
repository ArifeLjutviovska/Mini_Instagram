import { Component, Input } from "@angular/core";
import { Image } from "../models/image";
import { User } from "../models/user";

@Component({
    selector:'post',
    templateUrl:'./posts.component.html',
    styleUrls:[
       "./posts.component.css"
    ]
})
export class PostComponent{
    @Input() image:Image
    @Input() user:User

}