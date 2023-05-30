import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MapviewComponent } from './mapview/mapview.component';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    MapviewComponent
  ],  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule, 
    NgIf, 
    MatButtonModule
  
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
