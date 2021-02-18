import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageService } from './shared/image.service';
import { AuthService } from './shared/auth.service';
import { NavigationComponent } from './nav/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ImageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
