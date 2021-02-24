import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InfoService } from './shared/info.service';
import { AuthService } from './shared/auth.service';
import { NavigationComponent } from './nav/navigation.component';
import { FormsModule } from '@angular/forms';
import { NumberElementPipe } from './shared/numberElement.pipe';
import { RouterModule } from '@angular/router';
import { appRoutes } from './shared/routes';
import { ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import { ReversePipe } from './shared/reversePipe';

import {
  HomeComponent,
  UserListComponent

} from './home/index';

import {
ImageComponent,
EditImageComponent,
UploadImageComponent
} from './images/index';

import {
  UserComponent,
  UserImageComponent,
  UserProfileComponent

} from './user/profile/index';

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
