import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TpOneComponent } from './tp-one/tp-one.component';

@NgModule({
  declarations: [AppComponent, TpOneComponent],
  imports: [CommonModule, RouterOutlet, BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
