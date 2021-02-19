import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoService } from './shared/info.service';
import { AuthService } from './shared/auth.service';
import { NavigationComponent } from './nav/navigation.component';
import { PostComponent } from './home/posts.component';
import { FormsModule } from '@angular/forms';
import { PostListComponent } from './home/postList.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PostComponent,
   PostListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [InfoService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
