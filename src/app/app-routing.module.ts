import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
 
const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'Home', component:HeaderComponent },
  {path: 'About', component: IntroComponent},
  {path: 'Services', component:ContentComponent },
  {path: 'Testimonials', component: TestimonialsComponent},
  {path: 'Gallery', component: GalleryComponent},
  {path: 'Clients', component:ClientComponent },
  {path: 'Pricing', component: PricingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
