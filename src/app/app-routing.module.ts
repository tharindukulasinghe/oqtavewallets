import { ImageuploadComponent } from "./imageupload/imageupload.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "checkout/:id", component: CheckoutComponent },
  { path: "imageupload", component: ImageuploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
