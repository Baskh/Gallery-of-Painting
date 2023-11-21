import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExhibtionsComponent } from './Exhibtions/exhibtions/exhibtions.component';
import { EventsComponent } from './Events/events/events.component';
import { EducationsComponent } from './Educations/educations/educations.component';
import { ArtsArtistsComponent } from './Arts-Artists/arts-artists/arts-artists.component';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';

const routes: Routes = [
  { path: '', component:AppComponent },
  { path: 'Exhibtions', component:ExhibtionsComponent},
  { path:'Events', component:EventsComponent},
  { path:'Educations', component:EducationsComponent},
  { path:'ArtsArtists', component:ArtsArtistsComponent},
  { path:'AboutUs', component :AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ExhibtionsComponent,EventsComponent,ArtsArtistsComponent,AboutUsComponent]
