import { Routes } from '@angular/router'
import { HomeComponent } from '../home/home.component'
import { ImageComponent } from '../images/imageDetails/image.component'
import { EditImageComponent } from '../images/imageEdit/edit-image/edit-image.component'
import { UploadImageComponent } from '../images/imageUpload/upload-image/upload-image.component'
import { UserProfileComponent } from '../user/profile/user.profile.component'



export const appRoutes:Routes = [
    { path: 'images/:id', component: ImageComponent},
    {path:'images/:id/edit',component:EditImageComponent},
  { path: 'images', component: HomeComponent},
  {path:'upload',component:UploadImageComponent},
  {path:'users/:id',component:UserProfileComponent},
  { path: '', redirectTo: '/images', pathMatch: 'full'},

]