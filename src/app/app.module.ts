import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { FeatureComponent } from './feature/feature.component';
import { BrandsComponent } from './brands/brands.component';
import { FaqComponent } from './faq/faq.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BusinessComponent } from './business/business.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeBannerComponent,
    FeatureComponent,
    BrandsComponent,
    FaqComponent,
    BusinessComponent,
    TestimonialComponent,
    DashboardComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
