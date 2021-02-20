import { Routes } from '@angular/router'
import { HomeComponent } from '../home/home.component'
import { ImageComponent } from '../imageDetails/image.component'



export const appRoutes:Routes = [
    { path: 'images/:id', component: ImageComponent},
  { path: 'images', component: HomeComponent},
  { path: '', redirectTo: '/images', pathMatch: 'full'},

]