import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExhibtionsComponent } from './Exhibtions/exhibtions/exhibtions.component';
import { EventsComponent } from './Events/events/events.component';
import { EducationsComponent } from './Educations/educations/educations.component';
import { ArtsArtistsComponent } from './Arts-Artists/arts-artists/arts-artists.component';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { AllComponentsComponent } from './allComponents/all-components/all-components.component';

const routes: Routes = [
  { path: '', component:AllComponentsComponent },
  { path: 'exhibtions', component:ExhibtionsComponent},
  { path:'events', component:EventsComponent},
  { path:'educations', component:EducationsComponent},
  { path:'artsartists', component:ArtsArtistsComponent},
  { path:'aboutus', component :AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [ExhibtionsComponent,EventsComponent,ArtsArtistsComponent,AboutUsComponent]
