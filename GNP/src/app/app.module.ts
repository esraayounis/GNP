import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReservationsComponent } from './components/profile/reservations/reservations.component';
import { FaviortsComponent } from './components/profile/faviorts/faviorts.component';
import { GovernmentServicesComponent } from './components/government-services/government-services.component';
import { DoctorConsultComponent } from './components/doctor-consult/doctor-consult.component';
import { HomeCareComponent } from './components/home-care/home-care.component';
import { MedicalExaminationsComponent } from './components/medical-examinations/medical-examinations.component';
import { NursingVisitComponent } from './components/home-care/nursing-visit/nursing-visit.component';
import { DoctorVisitComponent } from './components/home-care/doctor-visit/doctor-visit.component';
import { SitterVisitComponent } from './components/home-care/sitter-visit/sitter-visit.component';
import { HomeServicesComponent } from './components/home-care/home-services/home-services.component';
import { ClinicVisitComponent } from './components/doctor-consult/clinic-visit/clinic-visit.component';
import { HomeVisitComponent } from './components/doctor-consult/home-visit/home-visit.component';
import { VideoConsultationComponent } from './components/doctor-consult/video-consultation/video-consultation.component';
import { IqamaIssuanceComponent } from './components/government-services/iqama-issuance/iqama-issuance.component';
import { RenewalIqamaComponent } from './components/government-services/renewal-iqama/renewal-iqama.component';
import { HealthCertificateComponent } from './components/government-services/health-certificate/health-certificate.component';
import { TrafficLicenseComponent } from './components/government-services/traffic-license/traffic-license.component';
import { LabsComponent } from './components/medical-examinations/labs/labs.component';
import { RaysComponent } from './components/medical-examinations/rays/rays.component';
import { HeartExamsComponent } from './components/medical-examinations/heart-exams/heart-exams.component';
import { MedicalComplexesComponent } from './components/services-representaive/medical-complexes/medical-complexes.component';
import { PrivateClinicsComponent } from './components/services-representaive/private-clinics/private-clinics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesRepresentaiveComponent } from './components/services-representaive/services-representaive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AuthententicationService } from './core/services/authententication.service';
import { AuthGuard } from './core/modules/authGuard/authGuard.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './shared/header/header.module';
import { OffersComponent } from './components/offers/offers.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SignUpMobileComponent } from './components/mobile-mode/sign-up/sign-up-mobile.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    ReservationsComponent,
    FaviortsComponent,
    GovernmentServicesComponent,
    DoctorConsultComponent,
    HomeCareComponent,
    MedicalExaminationsComponent,
    DoctorVisitComponent,
    NursingVisitComponent,
    SitterVisitComponent,
    HomeServicesComponent,
    ClinicVisitComponent,
    HomeVisitComponent,
    VideoConsultationComponent,
    IqamaIssuanceComponent,
    RenewalIqamaComponent,
    HealthCertificateComponent,
    TrafficLicenseComponent,
    LabsComponent,
    RaysComponent,
    HeartExamsComponent,
    MedicalComplexesComponent,
    PrivateClinicsComponent,
    ServicesRepresentaiveComponent,
    OffersComponent,
    SignUpMobileComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatFormFieldModule,
    NgSelectModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    CarouselModule,
    MatSliderModule,
    MatSlideToggleModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ MatSliderModule,
    MatSlideToggleModule],
  providers: [AuthententicationService, AuthGuard,
  //   TokenInterceptor,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: TokenInterceptor,
  //     multi: true,
  //   },
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
