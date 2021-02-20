import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoService } from './shared/info.service';
import { AuthService } from './shared/auth.service';
import { NavigationComponent } from './nav/navigation.component';
import { PostComponent } from './home/post/posts.component';
import { FormsModule } from '@angular/forms';
import { PostListComponent } from './home/postList/postList.component';
import { ThirdElementPipe } from './home/shared/thirdElement.pipe';
import { RouterModule } from '@angular/router';
import { appRoutes } from './shared/routes';
import { ImageComponent } from './imageDetails/image.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PostComponent,
   PostListComponent,
   ThirdElementPipe,
   ImageComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [InfoService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
