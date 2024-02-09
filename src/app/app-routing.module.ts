import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WebBodyComponent } from './web-body/web-body.component';
import { MidComponent } from './mid/mid.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { BikesidebarComponent } from './bikesidebar/bikesidebar.component';
import { RoyleEnfeildComponent } from './royle-enfeild/royle-enfeild.component';
import { PulsarComponent } from './pulsar/pulsar.component';
import { TvsComponent } from './tvs/tvs.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:"body", component:WebBodyComponent, children:[
    {path:"yamaha", component:BikesidebarComponent},
    {path:"royle-enfeild", component:RoyleEnfeildComponent},
    {path:"pulsar", component:PulsarComponent},
    {path:"tvs", component:TvsComponent},

  ]},
  {path:"bookRide", component:BookRideComponent},
  {path:"aboutUs", component:FooterComponent},

  {path: "", redirectTo:"body", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
