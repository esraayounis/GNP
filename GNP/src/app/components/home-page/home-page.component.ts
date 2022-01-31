import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/services/share-data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  representative = true;
  governmentServices = false;
  doctorConsult = false;
  homeCare = false;
  medicalExamination = false;
  activeRepresentative = true;
  activeGovernment = false;
  activeConsult = false;
  activeCare = false;
  activeExamination = false;
  navLink:any;
  nav:any;
  link:any;
  formdata!:FormGroup;
  selectedSpecialization:any;
  selectedCity:any;
  selectedArea:any;
  homePage = true;
  loginPage = false;
  openMenu = false;
  routerMenu: string= "";
  displayUSer= false;
  myLoogedUser: any;
  reservation = false;
  faviorts = false;
  items = [
    {id: '1', name: 'A', value:'A'},
    {id: '2', name: 'B', value:'B'},
    {id: '3', name: 'C', value:'C'}
  ]

  constructor(private router:Router,public fb: FormBuilder, private http: HttpClient,
    private data: ShareDataService, private cdRef: ChangeDetectorRef) {
      this.routerMenu = router.url; 
     }

  ngOnInit(): void {
    this.formdata = this.fb.group({
      specialization:"",
      city:"",
      area:"",
    });
  }

  ngAfterViewChecked() {
    
    let myStorage = window.localStorage;
    this.myLoogedUser = myStorage.getItem("authenticatedUSer");
    if (this.myLoogedUser == null) {
      this.displayUSer = false;
    } 
    else {
      this.displayUSer = true;
      this.myLoogedUser = myStorage.getItem("authenticatedUSer");
    }
    this.cdRef.detectChanges();
  }


  showMenu(){
    $('.sidebar').css('display','block');
    $('.sidebar').addClass('show-menu');
  }


  showLoginPage(){
   this.homePage = false; 
   this.reservation = false;
   this.faviorts = false;
   this.loginPage = true;

  }

  showHomePage(){
    this.homePage = true;
    this.loginPage = false;
    this.reservation = false;
    this.faviorts = false;
  }


  showRepresentative(){
    // change mat tab
    this.representative = true;
    this.governmentServices = false;
    this.doctorConsult = false;
    this.homeCare = false;
    this.medicalExamination = false;
    // change icon
    this.activeRepresentative = true;
    this.activeGovernment = false;
    this.activeConsult = false;
    this.activeCare = false;
    this.activeExamination = false;
  }

  showGovernmentServices(){
    this.representative = false;
    this.governmentServices = true;
    this.doctorConsult = false;
    this.homeCare = false;
    this.medicalExamination = false;

    this.activeRepresentative = false;
    this.activeGovernment = true;
    this.activeConsult = false;
    this.activeCare = false;
    this.activeExamination = false;
  }

  showDoctorConsult(){
    this.representative = false;
    this.governmentServices = false;
    this.doctorConsult = true;
    this.homeCare = false;
    this.medicalExamination = false;

    this.activeRepresentative = false;
    this.activeGovernment = false;
    this.activeConsult = true;
    this.activeCare = false;
    this.activeExamination = false;
  }

  showHomeCare(){
    this.representative = false;
    this.governmentServices = false;
    this.doctorConsult = false;
    this.homeCare = true;
    this.medicalExamination = false;

    this.activeRepresentative = false;
    this.activeGovernment = false;
    this.activeConsult = false;
    this.activeCare = true;
    this.activeExamination = false;
  }

  showMedicalExamination(){
    this.representative = false;
    this.governmentServices = false;
    this.doctorConsult = false;
    this.homeCare = false;
    this.medicalExamination = true;

    this.activeRepresentative = false;
    this.activeGovernment = false;
    this.activeConsult = false;
    this.activeCare = false;
    this.activeExamination = true;
  }

  selectSpecialization() {
    this.selectedSpecialization = this.formdata.controls["specialization"].value;
  }
  
  selectCity() {
    this.selectedCity = this.formdata.controls["city"].value;
  }
  

  selectArea() {
    this.selectedArea = this.formdata.controls["area"].value;
  }

  showReservation(){
    this.reservation = true;
    this.homePage = false;
    this.loginPage = false;
    this.faviorts = false;
  }

  
  showFaviorts(){
    this.reservation = false;
    this.homePage = false;
    this.loginPage = false;
    this.faviorts = true;
  }


  onClickSubmit(data:any){

  }

}

export interface ExampleTab {
  label: string;
  content: string;
}