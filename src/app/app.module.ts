import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebBodyComponent } from './web-body/web-body.component';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MidComponent } from './mid/mid.component';
import { BookRideComponent } from './book-ride/book-ride.component'
import { ReactiveFormsModule } from '@angular/forms';
// auth /firebase
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { firebaseConfig } from 'src/environment/environment';
import { BookRideService } from './book-ride.service';
import { FirebaseService } from './firebase.service';
import { BikesidebarComponent } from './bikesidebar/bikesidebar.component';
import { RoyleEnfeildComponent } from './royle-enfeild/royle-enfeild.component';
import { TimelapseComponent } from './timelapse/timelapse.component';
import { FooterComponent } from './footer/footer.component';
import { PulsarComponent } from './pulsar/pulsar.component';
import { TvsComponent } from './tvs/tvs.component';
 

@NgModule({
  declarations: [
    AppComponent,
    WebBodyComponent,
    HeaderComponent,
    MidComponent,
    BookRideComponent,
    BikesidebarComponent,
    RoyleEnfeildComponent,
    TimelapseComponent,
    FooterComponent,
    PulsarComponent,
    TvsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    BookRideService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
