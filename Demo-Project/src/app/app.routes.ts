import { Routes } from '@angular/router';
import { DemoMainComponent } from './components/demo-main/demo-main.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CollegesComponent } from './components/pages/colleges/colleges.component';
import { AcademicsComponent } from './components/pages/academics/academics.component';
import { AdmissionsComponent } from './components/pages/admissions/admissions.component';
import { PlacementsComponent } from './components/pages/placements/placements.component';
import { ContactComponent } from './components/pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: DemoMainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'colleges', component: CollegesComponent },
  { path: 'academics', component: AcademicsComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'placements', component: PlacementsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
