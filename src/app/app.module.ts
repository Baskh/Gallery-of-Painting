import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExhibtionsComponent } from './Exhibtions/exhibtions/exhibtions.component';
import { EventsComponent } from './Events/events/events.component';
import { ArtsArtistsComponent } from './Arts-Artists/arts-artists/arts-artists.component';
import { EducationsComponent } from './Educations/educations/educations.component';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { CoursolComponent } from './coursole/coursol/coursol.component';
import { AllComponentsComponent } from './allComponents/all-components/all-components.component';
import { CoursesComponent } from './Educations/educations/courses/courses.component';
// import { SignupComponent } from './signup/signup.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-up/sign-in/sign-in.component';


// import { SwiperModule } from 'swiper/angular';
// import { HttpClientModule } from '@angular/common/http';
// import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    AppComponent,
    ExhibtionsComponent,
    EventsComponent,
    ArtsArtistsComponent,
    EducationsComponent,
    AboutUsComponent,
    CoursolComponent,
    AllComponentsComponent,
    CoursesComponent,
    // SignupComponent,
    SignUpComponent,
    SignInComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    // AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
