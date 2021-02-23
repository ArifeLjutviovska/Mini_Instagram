import { Routes } from '@angular/router'
import { HomeComponent } from '../home/home.component'
import { ImageComponent } from '../images/imageDetails/image.component'
import { UserProfileComponent } from '../user/profile/user.profile.component'



export const appRoutes:Routes = [
    { path: 'images/:id', component: ImageComponent},
  { path: 'images', component: HomeComponent},
  {path:'users/:id',component:UserProfileComponent},
  { path: '', redirectTo: '/images', pathMatch: 'full'},

]