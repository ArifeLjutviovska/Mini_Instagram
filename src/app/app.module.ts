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

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    InfoService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
