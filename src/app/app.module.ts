import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoService } from './shared/info.service';
import { AuthService } from './shared/auth.service';
import { NavigationComponent } from './nav/navigation.component';
import { FormsModule } from '@angular/forms';
import { NumberElementPipe } from './shared/numberElement.pipe';
import { RouterModule } from '@angular/router';
import { appRoutes } from './shared/routes';
import { ImageComponent } from './images/imageDetails/image.component';
import { UserListComponent } from './home/listUsers/userList.component';
import { UserProfileComponent } from './user/profile/user.profile.component';
import { UserComponent } from './user/profile/user.component';
import { UserImageComponent } from './user/profile/user.images.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadImageComponent } from './images/imageUpload/upload-image/upload-image.component';
import { EditImageComponent } from './images/imageEdit/edit-image/edit-image.component';
import {FileUploadModule} from 'ng2-file-upload';
import { ReversePipe } from './shared/reversePipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
   NumberElementPipe,
   ImageComponent,
   UserListComponent,
   UserProfileComponent,
   UserComponent,
   UserImageComponent,
   UploadImageComponent,
   EditImageComponent,
   ReversePipe,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    InfoService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
