import { Routes } from '@angular/router'
import {
  HomeComponent,

} from '../home/index';

import {
ImageComponent,
EditImageComponent,
UploadImageComponent
} from '../images/index';

import {
  UserProfileComponent

} from '../user/profile/index';



export const appRoutes:Routes = [
    { path: 'images/:id', component: ImageComponent},
    {path:'images/:id/edit',component:EditImageComponent},
  { path: 'images', component: HomeComponent},
  {path:'upload',component:UploadImageComponent},
  {path:'users/:id',component:UserProfileComponent},
  { path: '', redirectTo: '/images', pathMatch: 'full'},

]