import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./items/items.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ImageuploadComponent } from "./imageupload/imageupload.component";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    CheckoutComponent,
    ImageuploadComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
