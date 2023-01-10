import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusPubLibModule } from 'busPub-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    BusPubLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
