import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'demo' } as CloudinaryConfiguration),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
