import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderMenuComponent } from './componets/header-menu/header-menu.component';
import { MainPageComponent } from './componets/main-page/main-page.component';
import { FooterPageComponent } from './componets/footer-page/footer-page.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderMenuComponent, MainPageComponent, FooterPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
