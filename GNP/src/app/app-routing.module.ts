import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicVisitComponent } from './components/doctor-consult/clinic-visit/clinic-visit.component';
import { DoctorConsultComponent } from './components/doctor-consult/doctor-consult.component';
import { HomeVisitComponent } from './components/doctor-consult/home-visit/home-visit.component';
import { VideoConsultationComponent } from './components/doctor-consult/video-consultation/video-consultation.component';
import { GovernmentServicesComponent } from './components/government-services/government-services.component';
import { HealthCertificateComponent } from './components/government-services/health-certificate/health-certificate.component';
import { IqamaIssuanceComponent } from './components/government-services/iqama-issuance/iqama-issuance.component';
import { RenewalIqamaComponent } from './components/government-services/renewal-iqama/renewal-iqama.component';
import { TrafficLicenseComponent } from './components/government-services/traffic-license/traffic-license.component';
import { DoctorVisitComponent } from './components/home-care/doctor-visit/doctor-visit.component';
import { HomeCareComponent } from './components/home-care/home-care.component';
import { HomeServicesComponent } from './components/home-care/home-services/home-services.component';
import { NursingVisitComponent } from './components/home-care/nursing-visit/nursing-visit.component';
import { SitterVisitComponent } from './components/home-care/sitter-visit/sitter-visit.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { HeartExamsComponent } from './components/medical-examinations/heart-exams/heart-exams.component';
import { LabsComponent } from './components/medical-examinations/labs/labs.component';
import { MedicalExaminationsComponent } from './components/medical-examinations/medical-examinations.component';
import { RaysComponent } from './components/medical-examinations/rays/rays.component';
import { SignUpMobileComponent } from './components/mobile-mode/sign-up/sign-up-mobile.component';
import { FaviortsComponent } from './components/profile/faviorts/faviorts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReservationsComponent } from './components/profile/reservations/reservations.component';
import { PrivateClinicsComponent } from './components/services-representaive/private-clinics/private-clinics.component';
import { ServicesRepresentaiveComponent } from './components/services-representaive/services-representaive.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './core/modules/authGuard/authGuard.module';
const routes: Routes = [
  // , canActivate: [AuthGuard]
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-up-mobile', component: SignUpMobileComponent },
  { path: 'doctor-consult', component: DoctorConsultComponent ,
    children: [
    {
      path:'clinic-visit', component: ClinicVisitComponent
    },
    {
      path:'home-visit', component: HomeVisitComponent
    },
    {
      path:'video-consultation', component: VideoConsultationComponent
    }]
  },
  { path: 'government-services', component:GovernmentServicesComponent,
    children: [
    {
      path:'health-certificate', component: HealthCertificateComponent
    },
    {
      path:'iqama-issuance', component: IqamaIssuanceComponent
    },
    {
      path:'renewal-iqama', component: RenewalIqamaComponent
    },
    {
      path:'traffic-license', component: TrafficLicenseComponent
    }]
  },
  { path: 'home-care', component: HomeCareComponent,
    children: [
    {
      path:'doctor-visit', component: DoctorVisitComponent
    },
    {
      path:'nursing-visit', component: NursingVisitComponent
    },
    {
      path:'sitter-visit', component: SitterVisitComponent
    },
    {
      path:'home-services', component: HomeServicesComponent
    }]
  },
  { path: 'medical-examinations', component: MedicalExaminationsComponent ,
    children: [
      {
        path:'heart-examinations', component: HeartExamsComponent
      },
      {
        path:'labs', component: LabsComponent
      },
      {
        path:'rays', component: RaysComponent
      }]
  },
  { path: 'services-representative', component: ServicesRepresentaiveComponent,
  children: [
    {
      path:'medical-complexes', component: MedicalExaminationsComponent
    },
    {
      path:'private-clinics', component: PrivateClinicsComponent
    }]
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'faviorts', component: FaviortsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
