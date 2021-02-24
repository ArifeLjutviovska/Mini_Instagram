import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { InfoService } from "../shared/info.service";

@Component({
    selector:'navbar',
    templateUrl:'./navigation.component.html',
    styleUrls:[
        './navigation.component.css'
    ]
})
export class NavigationComponent implements OnInit{

    search:string='';

    constructor(private infoService:InfoService,private router:Router){}
    ngOnInit(){
       
    }

   
}